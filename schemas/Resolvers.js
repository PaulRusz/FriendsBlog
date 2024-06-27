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
    updatePost: async (parent, { postId, postTitle, postText }, context) => {
        return Post.findOneAndUpdate(
          { _id: postId },
          { postTitle, postText },
          { new: true }
        )
    },

    deletePost: async (parent, { postId }, context) => {
      return Post.findOneAndDelete({ _id: postId });
    },

    likePost: async (parent, { postId, userId }, context) => {
      const post = await Post.findById(postId)
      if (!post) {
        throw new Error('Post not found')
      }
      post.likes.push(userId)
      await post.save()
      return post
    },
    // unlikePost: async (parent, { postId, userId }, context) => {
    //   const post = await Post.findById(postId)
    //   if (!post) {
    //     throw new Error('Post not found')
    //     }
    //     const index = post.likes.indexOf(userId)
    //     if (index > -1) {
    //       post.likes.splice(index, 1)
    //  },
    tagFriend: async (parent, { postId, friendUserName }, context) => {
      const post = await Post.findById(postId)
      if (!post) {
        throw new Error('Post not found')
      }
      const friend = await User.findOne({ username: friendUserName })
      if (!friend) {
        throw new Error('Friend not found')
    }
      post.taggedFriends.push(friend.username)
      await post.save()
      return post
    },

    addTagsToPost: async (parent, { postId, tags }, context) => {
      const post = await Post.findById(postId);
      if (!post) {
        throw new Error('Post not found');
      }
      // Check if the tags array exists, if not, initialize it as an empty array
      if (!post.tags) {
        post.tags = [];
      }
      post.tags.push(...tags);
      await post.save();
      return post;
    },

    removeTagsFromPost: async (parent, { postId, tags }, context) => {
      const post = await Post.findById(postId)
      if (!post) {
        throw new Error('Post not found')
      }
      post.tags = post.tags.filter(tag => !tags.includes(tag))
      await post.save()
      return post
    },
  }
};

module.exports = resolvers;