import { gql } from '@apollo/client';

export const GET_CLIENTS_CONTACTS = gql`
query ClientContacts($where: ClientContactWhereUniqueInput) {
  clientContacts(where: $where) {
    repFirstName
    repLastName
    id
    clientId
    firstAndLastName
    repEmail
    client {
      clientName
    }
  }
}
`;

