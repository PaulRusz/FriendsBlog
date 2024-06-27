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
      return { user };

    },
    addPost: async (parent, args) => {
      const post = await Post.create(args);
      // const token = signToken(post);
      return post;
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          args,
          { new: true }
        );

        return updatedUser;
      }

      // throw new AuthenticationError('Not logged in');
    },
    deleteUser: async (parent, args, context) => {
      if (context.user) {
        const deletedUser = await User.findOneAndDelete({ _id: context.user._id });

        return deletedUser;
      }

      // throw new AuthenticationError('Not logged in');
    },
    updateUserPassword: async (parent, { password }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { password },
          { new: true }
        );

        return updatedUser;
      }

      // throw new AuthenticationError('Not logged in');
    },
    updateUserAvatar: async (parent, { avatar }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { avatar },
          { new: true }
        );

        return updatedUser;
      }

      // throw new AuthenticationError('Not logged in');
    },
    updateUserImage: async (parent, { userimage }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { userimage },
          { new: true }
        );

        return updatedUser;
      }

      // throw new AuthenticationError('Not logged in');
    },
    // Add other mutation resolvers here
  },
};
