import { gql } from '@apollo/client';

export const GET_CLIENTS = gql`
query Clients($where: ClientWhereUniqueInput) {
  clients(where: $where) {
    clientName
    id
  }
}
`;

