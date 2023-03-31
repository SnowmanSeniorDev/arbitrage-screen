import { gql } from 'graphql-request'

export const SIGNUP = gql`
    mutation Signup($email: String!, $password: String!, $name: String!) {
        register(input: { email: $email, password: $password, name: $name }) {
            email
        }
    }
`
