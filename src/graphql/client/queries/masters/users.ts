import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query Users($where: UserWhereInput) {
    users(where: $where) {
      name
      email
      role {
        name
      }
    }
  }
`;
