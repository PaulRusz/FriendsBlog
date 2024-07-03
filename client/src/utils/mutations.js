import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        token
        user {
            _id
            username
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!,$avatar:String!) {
        addUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password,avatar: $avatar) {
            token
            user {
                _id
                username
            }
        }
    }
`;
