import { gql } from '@apollo/client'

export const QUERY_USERS = gql`
    query ($username: String!) {
        users(username: $username) {
            _id
            firstName
            lastName
            username
        }
    }
`;

export const QUERY_USER = gql`
    query ($id: ID!) {
        user(id: $id) {
            _id
            firstName
            lastName
            username
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

export const QUERY_ME = gql`
    query {
        me {
            _id
            firstName
            lastName
            email
            username
            createdAt
            posts {
                _id
                postTitle
                postText
                postAuthor
                createdAt
            }
            friends {
                _id
                username
            }
        }
    }
`;