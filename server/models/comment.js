const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema(
  {
    username: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    commentBody: {
      type: String,
      required: true,
      maxlength: 200
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: Timestamp => dateFormat(Timestamp)
    }
    // commentId: {
    //   type: Schema.Types.ObjectId,
    //   default: () => new Types.ObjectId()
    // },
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

const Comment = model('Comment', commentSchema);

module.exports = Comment;