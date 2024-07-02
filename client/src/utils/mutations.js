import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        token
        User {
            _id
            Username
        }
    }
`;

export const ADD_USER = gql`
    mutation AddUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!) {
        AddUser(FirstName: $firstName, LastName: $lastName, Username: $username, Email: $email, Password: $password) {
            token
            User {
                _id
                Username
            }
        }
    }
`;