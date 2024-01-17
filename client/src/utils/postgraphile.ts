import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
export const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

export const GET_USER = gql`
  query {
    userByUserId(userId: 1) {
      userId
      name
      mailAddress
    }
  }
`;

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
