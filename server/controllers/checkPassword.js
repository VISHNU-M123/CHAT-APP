const userModel = require("../models/userModel")
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function checkPassword(req, res) {
    try {
        const {password, userId} = req.body
        const user = await userModel.findById(userId)
        const verifyPassword = await bcryptjs.compare(password, user.password)

        if(!verifyPassword){
            return res.status(400).json({message:'Please check password'})
        }

        const tokenData = {
            id: user._id,
            email: user.email
        }
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {expiresIn:'1d'})
        const cookieOption = {
            http: true,
            secure: true
        }

        return res.cookie('token',token,cookieOption).status(200).json({message:'Login success', token:token})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

module.exports = checkPassword