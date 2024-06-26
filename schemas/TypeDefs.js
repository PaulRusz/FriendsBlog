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

  }

  type Query {
    me: User
    userByUsername(username: String!): User
    post(_id: ID!): Post
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postTitle: String!, postText: String!, postTag: String!, username: String!): Post
    removeUser(username: String!): User
  }

  type Auth {
    username: User
    email: String
    password: String
    avatar: String
    
  }
`;

module.exports = typeDefs;