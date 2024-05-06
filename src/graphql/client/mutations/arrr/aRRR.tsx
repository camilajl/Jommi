import { gql } from '@apollo/client';

export const UPDATE_ARRR = gql` 
mutation Mutation($where: ARRRWhereUniqueInput!, $data: ARRRUpdateInput) {
  updateARRR(where: $where, data: $data) {
    id
  }
}
`;



