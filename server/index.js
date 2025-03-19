const express = require('express');
const cors = require('cors');
require('dotenv').config()
const connectDB = require('./config/connectDB')
const router = require('./routes/index')

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.json({ message: 'server is running on port' })
})

// api endpoint
app.use('/api',router)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`serveris running at http://localhost:${PORT}`)
    })
})
