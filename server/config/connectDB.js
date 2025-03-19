const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        const connection = mongoose.connection
        connection.on('connected', () => {
            console.log('connected to database')
        })

        connection.on('error', (error) => {
            console.log('Something is wrong in mongodb', error)
        })
    } catch (error) {
        console.log('something went wrong', error)
    }
}

module.exports = connectDB