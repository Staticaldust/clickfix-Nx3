import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
export const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

export const LOGIN_MUTATION = gql`
  mutation MyMutation($input: LoginInput!) {
    login(input: $input) {
      loginResponse {
        jwtToken
        userDetails
      }
    }
  }
`;
export const SIGN_UP = gql`
  mutation MyMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      user {
        email
        password
      }
    }
  }
`;
