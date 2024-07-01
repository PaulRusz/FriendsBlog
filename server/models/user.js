const { Schema, model } = require('mongoose');
const Bcrypt = require('bcrypt');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must Match An Email Address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  avatar: {
    type: String, // Store Path To The Uploaded Image
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    }
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
});

// Retrieve Friends Count
userSchema.virtual('FriendCount').get(function () {
  return this.friends.length;
});

// Hash User's Password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const SaltRounds = 10;
    this.password = await Bcrypt.hash(this.password, SaltRounds);
  }
  next();
});

// Authenticate User's Password
userSchema.methods.isCorrectPassword = async function (password) {
  return Bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;