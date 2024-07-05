import { gql } from '@apollo/client'

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            firstName
            lastName
            username
            email
            posts {
                _id
                postText
                createdAt
            }
        }
    }
`;

export const QUERY_ME = gql`
    query me {
         me {
    username
    comments {
      commentAuthor
      commentText
      _id
      createdAt
      likes
    }
    firstName
    lastName
    posts {
      postTitle
      postText
    }
  }
    }
`;