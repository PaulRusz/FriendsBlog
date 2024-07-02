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
    mutation AddUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!) {
        AddUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;