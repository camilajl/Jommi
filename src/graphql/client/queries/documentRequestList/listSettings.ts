import { gql } from '@apollo/client';

export const GET_DOCUMENT_REQUEST_LIST_SETTING = gql`
query DocumentRequestListSettings($where: DocumentRequestListSettingsWhereUniqueInput) {
  documentRequestListSettings(where: $where) {
    mers {
      id
      clientId
      welcomeEmail {
        dueDate
      }
    }
    stateSpecificAppproved
    stateSpecificCompleted
    subServicingAppproved
    subServicingCompleted
    writtenPoliciesAppproved
    writtenPoliciesCompleted
    mersId
    id
  }
}
`;

export const GET_DOCUMENT_REQUEST_LIST = gql`
query DocumentRequestLists($where: DocumentRequestListWhereUniqueInput) {
  documentRequestLists(where: $where) {
    approvalNotes
    clientResponse
    description
    files
    mersId
    id
    isApprove
    listNumber
    notes
    order
    state
  }
}
`;
