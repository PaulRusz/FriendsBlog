const { User, Post } = require('../models');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('posts')
          .populate('friends');

        return userData;
      }

      // throw new AuthenticationError('Not logged in');
    },
    userByUsername: async (parent, { username }) => {
      return User.findOne({ username }).select('-__v -password').populate('posts').populate('friends');
    },
    post: async (parent, { _id }) => {
      return Post.findById(_id);
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      // const token = signToken(user);
      return user;
    },
    addPost: async (parent, args) => {
      const post = await Post.create(args);
      // const token = signToken(post);
      return post;
    },
    // Add other mutation resolvers here
  },
  
};

module.exports = resolvers;