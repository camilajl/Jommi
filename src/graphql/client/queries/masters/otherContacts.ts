import { gql } from '@apollo/client';

export const GET_OTHER_CONTACTS = gql`
query OtherContacts($where: ClientContactWhereUniqueInput) {
    otherContacts(where: $where) {
      firstAndLastName
      name
      lastName
      email
    }
  }
`;



