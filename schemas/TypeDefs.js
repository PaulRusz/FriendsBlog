const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
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
    addUser(username: String!, email: String!, password: String!, avatar: String!): Auth
    addPost(title: String!, content: String!): Post
    removeUser(username: String!): User
  }

 type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;

