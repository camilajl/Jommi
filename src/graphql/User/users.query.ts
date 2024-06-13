
import { gql, useQuery } from '@apollo/client';

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
`