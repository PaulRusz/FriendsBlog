const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema(
  {
    authorId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
    commentBody: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: Timestamp => dateFormat(Timestamp)
    },
    lastEditedAt: {
      type: Date,
    },
    likes: {
      type: [Schema.Types.ObjectId],
      ref: 'User'
    },
    dislikes: {
      type: [Schema.Types.ObjectId],
      ref: 'User'
    },
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  },
  { timestamps: true }
);

const Comment = model('Comment', commentSchema);

module.exports = Comment;