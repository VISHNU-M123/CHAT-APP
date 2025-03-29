const express = require('express')
const {Server} = require('socket.io')
const http = require('http')
const getUserDetailsFromToken = require('../helpers/getUserDetailsFromToken')

const app = express()

// socket connection
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: process.env.FRONTEND_URL,
        credentials: true
    }
})

// online user

io.on('connection', async (socket) => {
    console.log('connected user', socket.id)

    const token = socket.handshake.auth.token

    // current user details
    const user = await getUserDetailsFromToken(token)

    // create a room
    socket.join(user?._id)

    // disconnect
    io.on('disconnect', () => {
        console.log('disconnected user', socket.id)
    })
})

module.exports = {
    app,
    server
}