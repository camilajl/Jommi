
import { gql, useQuery } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    users {
      name
      roles {
        name
      }
    }
}
`