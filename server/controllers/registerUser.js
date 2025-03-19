const userModel = require("../models/userModel");
const bcryptjs = require('bcryptjs');

async function registerUser(req,res) {
    try {
        const {name, email, password, profile_pic} = req.body;

        const checkEmail = userModel.findOne({email})

        if(checkEmail){
            return res.status(400).json({message:'User already exists'})
        }

        // password hash
        const salt = bcryptjs.genSalt(10);
        const hashPassword = bcryptjs.hash(password, salt);

        const payload = {
            name,
            email,
            profile_pic,
            password : hashPassword
        }

        const user = new userModel(payload)
        const userSave = await user.save()

        return res.status(201).json({message:'User created successfully', data:userSave, success:true})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = registerUser