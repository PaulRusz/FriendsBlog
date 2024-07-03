
const typeDefs = `#graphql
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    avatar: String
    posts: [Post]!
    comments: [Comment]!
    friends: [User]!
    friendCount: Int
  }

  type Post {
    _id: ID
    postTitle: String
    postText: String
    postImage: String
    postTags: [Tag]!
    postAuthor: String
    createdAt: String
    comments: [Comment]!
    likes: [ID]
    tags: [Tag]!
    taggedFriends: [String]
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
    likes: Int
  }

  type Tag {
    _id: ID
    tagName: String
  }

  type Auth {
    user: User
    token: String!
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(postId: ID!): Post
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!, avatar: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(_id:String!, firstName: String!, lastName: String!, username: String!, email: String!, password: String!, avatar: String!): User
    deleteUser(username: String!): User
    addPost(postTitle: String!, postText: String!, postTag: String!, username: String!): Post
    likePost(postId: ID!, userId: ID!): Post
    # unlikePost
    updatePost(postId: ID!, postTitle: String, postText: String): Post
    deletePost(postId: ID!): Post
    addTagsToPost(postId: ID!, tags: [String]!): Post
    removeTagsFromPost(postId: ID!, tags: [String]!): Post
    tagFriend(postId: ID!, friendUserName: String!): Post
    # untagFriend
    addComment(postId: ID!, commentText: String!, commentAuthor: String!): Post
    updateComment(postId: ID!, commentText: String!, commentId: ID!): Post
    deleteComment(postId: ID!, commentId: ID!): Post
  }
`;

module.exports = typeDefs;