const { Post, Tag, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    // Retrieve Users
    users: async () => {
      return User.find().populate('posts').populate('comments').populate('friends');
    },
    // me: async (parent, args, context) => {
    //   if (context.user) {
    //     const userData = await User.findOne({ _id: context.user._id })
    //       .select('-__v -password')
    //       .populate('posts')
    //       .populate('friends');

    //     return userData;
    //   }

    //   // throw new AuthenticationError('Not logged in');
    // },

    // Retrieve User By Username
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('posts').populate('comments').populate('friends');
    },

    // Retrieve All Posts By User
    posts: async (parent, { username }) => {
      const Params = username ? { username } : {};
      return Post.find(Params).sort({ createdAt: -1 });
    },

    // Retrieve Post By Post ID
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const User = await User.create(args);
      console.log(args);
      console.log(User);
      const Token = signToken(User);
      return { Token, User };
      // return User;
    },

    login: async(parent, { login, password }) => {
      const User = await User.findOne({ 
        $or: [{ email: login }, { username: login }]
      });

      if (!User) {
        throw AuthenticationError;
      }

      const CorrectPassword = await User.isCorrectPassword(password);

      if (!CorrectPassword) {
        throw AuthenticationError;
      }

      const Token = signToken(User);

      return { Token, User };
    },

    updateUser: async (parent, { _id, firstName, lastName, username, email, password, avatar }, context) => {
      console.log(_id);
      console.log(username);
      return User.findOneAndUpdate(
        { _id },
        { firstName, lastName, username, email, password, avatar },
        { new: true },
      );
    },

    // TODO: Delete User

    addPost: async (parent, { postTitle, postText, postImage, postTags, postAuthor }) => {
      const Post = await Post.create({ postTitle, postText, postImage, postTags, postAuthor });

      await User.findOneAndUpdate(
        { username: postAuthor },
        { $addToSet: { posts: post._id } }
      );
      
      return Post;
    },

    addComment: async (parent, { postId, commentText, commentAuthor }) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        { $addToSet: { comments: { commentText, commentAuthor } } },
        { new: true, runValidators: true, }
      );
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

    // TODO: Like Comment
    
    updatePost: async (parent, { postId, postTitle, postText }, context) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        { postTitle, postText },
        { new: true }
      );
    },
    
    // TODO: Update Comment

    deletePost: async (parent, { postId }) => {
      return Post.findOneAndDelete({ _id: postId });
    },

    deleteComment: async (parent, { postId, commentId }) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
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
  
    // unlikePost: async (parent, { postId, userId }, context) => {
      //   const post = await Post.findById(postId)
      //   if (!post) {
        //     throw new Error('Post not found')
        //     }
        //     const index = post.likes.indexOf(userId)
        //     if (index > -1) {
          //       post.likes.splice(index, 1)
          //  },

    // TODO: Untag Friend

  }
};

module.exports = resolvers;