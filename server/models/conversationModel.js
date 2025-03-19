const mongoose = require('mongoose');

const messagesSchema = new mongoose.Schema({
    text:{
        type:String,
        default:''
    },
    imageUrl:{
        type:String,
        default:''
    },
    videoUrl:{
        type:String,
        default:''
    },
    seen:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const conversationSchema = new mongoose.Schema({
    sender:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:'User'
    },
    receiver:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:'User'
    },
    messages:[
        {
            type:mongoose.Schema.ObjectId,
            ref:'Message'
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const MessageModel = mongoose.model('Message',messagesSchema)
const ConversationModel = mongoose.model('Conversation', conversationSchema)

module.exports = {
    MessageModel,
    ConversationModel
}