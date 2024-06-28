const { User, Post } = require('../models');

const resolvers = {
  Query: {
    all: async () => {
      return await User.find({});
    },
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
      console.log(args);
      const user = await User.create(args);
      // const token = signToken(user);
      console.log(user);
      return user;
    },
    addPost: async (parent, args) => {
      const post = await Post.create(args);
      // const token = signToken(post);
      return post;
    },

  //   update user
    updateUser: async (parent, { _id, username, password, email, avatar }, context) => {
      console.log(_id);
      console.log(username)
      return User.findOneAndUpdate(
        { _id },
        { username, password, email, avatar },
        { new: true }
      )
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
      const post = await Post.findById(postId);
      if (!post) {
        throw new Error('Post not found');
      }
      // Check if the likes array exists, if not, initialize it as an empty array
      if (!post.likes) {
        post.likes = [];
      }
      // Check if the user has already liked the post
      if (post.likes.includes(userId)) {
        throw new Error('User has already liked the post');
      }
      // Push the userId into the likes array
      post.likes.push(userId);
      await post.save();
      return post;
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
      const post = await Post.findById(postId);
      if (!post) {
        throw new Error('Post not found');
      }
      const friend = await User.findOne({ username: friendUserName });
      if (!friend) {
        throw new Error('Friend not found');
      }
      // Check if the taggedFriends array exists, if not, initialize it as an empty array
      if (!post.taggedFriends) {
        post.taggedFriends = [];
      }
      // Check if the friend is already tagged in the post
      if (post.taggedFriends.includes(friend.username)) {
        throw new Error('Friend is already tagged in the post');
      }
      // Push the friend's username into the taggedFriends array
      post.taggedFriends.push(friend.username);
      await post.save();
      return post;
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