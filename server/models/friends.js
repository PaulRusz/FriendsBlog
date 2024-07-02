
const { Schema, model } = require('mongoose')
const { type } = require('os')

const friendSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
    })

const Friend = model('Friend', friendSchema);

module.exports = Friend;