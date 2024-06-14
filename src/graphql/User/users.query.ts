import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      enabled
      name
      email
      roles {
        name
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUserById($id: ID!) {
    userById(id: $id) {
      id
      enabled
      name
      email
      roles {
        name
      }
    }
  }
`;
