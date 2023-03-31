import { gql } from 'graphql-request'

export const LOGIN = gql`
    query Login($email: String!, $password: String!) {
        login(input: { email: $email, password: $password }) {
            user {
                _id
                name
                email
                completedKyc
            }
            token {
                access_token
                expires_in
            }
            access_grant
        }
    }
`
