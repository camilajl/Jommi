import { gql } from '@apollo/client';

export const GET_MERS_BY_ID = gql`
query Mers($mersId: String!) {
  mers(id: $mersId) {
    id
    documentRequestListSettings {
      id
      stateSpecificAppproved
      stateSpecificCompleted
      subServicingCompleted
      subServicingAppproved
      writtenPoliciesAppproved
      writtenPoliciesCompleted
      mersId
    }
    welcomeEmail {
      id
      dueDate
    }
  }
}
`;



