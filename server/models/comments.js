
const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema(
  {
    commentId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    commentBody: {
      type: String,
      required: true,
      maxlength: 200
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

const Comments = model('comments', commentSchema);

module.exports = Comments;
