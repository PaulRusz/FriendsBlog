const { Schema, model } = require('mongoose');
const commentSchema = require('./commentSchema');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
  {
    postTitle: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 100,
    },
    postText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 300,
    },
    posttag: {
      type: String,
      required: true,
      enum: ['tag1', 'tag2', 'tag3'],
      default: 'tag1',
    },
    postImage: {
      type: String, // Store the path to the uploaded image for the post
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    comments: [commentSchema]
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

postSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

const Post = model('Post', postSchema);

module.exports = Post;