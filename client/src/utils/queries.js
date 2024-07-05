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
            _id
            firstName
            lastName
            email
            posts {
                _id
                postTitle
                postText
                postAuthor
                createdAt
            }
        }
    }
`;