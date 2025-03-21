const getUserDetailsFromToken = require("../helpers/getUserDetailsFromToken")
const userModel = require("../models/userModel")

async function updateUserDetails(req, res) {
    try {
        const token = req.cookies.token || ""
        const user = await getUserDetailsFromToken(token)

        const {name, profile_pic} = req.body

        const updateUser = await userModel.updateOne({_id:user._id}, {
            name,
            profile_pic
        })

        const userInformation = await userModel.findById(user._id)

        return res.json({message:'user updated successfully.', data:userInformation})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

module.exports = updateUserDetails