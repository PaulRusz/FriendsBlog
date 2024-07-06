const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
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
  postImage: {
    type: String, // Store Path To The Uploaded Image For The Post
  },
  postTags: [{
    type: Schema.Types.ObjectId,
    ref: 'Tag', // Define Tags As An Array Of ObjectsIds Referencing The 'Tag' Model
  }],
  postAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: Timestamp => dateFormat(Timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (Timestamp) => dateFormat(Timestamp),
      },
    },
  ],
  // TODO: Likes
  // TODO: Tags
  // TODO: Tagged Friends
},
{
  toJSON: {
    getters: true
  },
  id: false
});

// Retrieve Comments Count
postSchema.virtual('CommentCount').get(function() {
  return this.comments.length;
});

const Post = model('Post', postSchema);

module.exports = Post;