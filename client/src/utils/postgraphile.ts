import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
export const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
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
