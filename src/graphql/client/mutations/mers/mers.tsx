import { gql } from '@apollo/client';

export const UPDATE_MERS_STATE = gql`
mutation Mutation($where: MersWhereUniqueInput!, $data: MersUpdateInput) {
  updateMers(where: $where, data: $data) {
    id
    transactionState
  }
}
`;



