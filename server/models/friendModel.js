

const mongoose = require('mongoose')
const { type } = require('os')

// Friend Model
const friendSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
        },
        email: {
            type: String,
            required: true
        },
    })

    const Friend = mongoose.model('Friend', friendSchema)

    module.exports = Friend