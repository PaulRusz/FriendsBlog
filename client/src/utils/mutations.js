import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
    mutation ($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
    }
`;

export const ADD_USER = gql`
    mutation addUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!,$avatar:String!) {
        addUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password, avatar: $avatar) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_POST = gql`
mutation addPost($title: String!, $text: String!) {
    addPost(postTitle: $title, postText: $text) {
        _id
        posts{
            _id
        }
    }
}`

export const ADD_FRIEND = gql`
    mutation ($id: ID!) {
        addFriend(id: $id) {
            _id
            friends {
                _id
            }
            FriendCount
        }
    }
`;

export const REMOVE_FRIEND = gql`
    mutation ($id: ID!) {
        removeFriend(id: $id) {
            _id
            friends {
                _id
            }
            FriendCount
        }
    }
`;
