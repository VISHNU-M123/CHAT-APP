const userModel = require("../models/userModel")

async function checkEmail(req,res) {
    try {
        const {email} = req.body
        const checkEmail = await userModel.findOne({email}).select("-password")

        if(!checkEmail){
            return res.status(400).json({message:'User not exists'})
        }

        return res.status(200).json({message:'email verify', data:checkEmail, success:true})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

module.exports = checkEmail