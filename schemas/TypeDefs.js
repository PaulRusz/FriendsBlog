const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    avatar: String
    userimage: String
    posts: [Post]
    friends: [User]
    friendCount: Int
  }

  type Post {
    id: ID
    postTitle: String
    postText: String
    username: User
    likes: [ID] # Array of user ID's who liked the post
    tags: [String] # Array of tags
    taggedFriends: [String] # Array of friend usernames tagged

  }

  type Query {
    me: User
    userByUsername(username: String!): User
    post(_id: ID!): Post
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, avatar: String!): Auth
    addPost(postTitle: String!, postText: String!, postTag: String!, username: String!): Post
    removeUser(username: String!): User
    updatePost(postId: ID!, postTitle: String, postText: String): Post
    deletePost(postId: ID!): Post
    likePost(postId: ID!, userId: ID!): Post
    tagFriend(postId: ID!, friendUserName: String!): Post
    addTagsToPost(postId: ID!, tags: [String]!): Post
    removeTagsFromPost(postId: ID!, tags: [String]!): Post
  }

  type Auth {
    username: User
    email: String
    password: String
    avatar: String
    
  }
`;

module.exports = typeDefs;