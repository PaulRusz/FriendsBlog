const { Schema, model } = require('mongoose');

const tagSchema = new Schema({
    tagName: {
        type: String,
        minlength: 1,
        maxLength: 50,
        trim: true,
    }
});

const Tag = model('Tag', tagSchema);

module.exports = Tag;