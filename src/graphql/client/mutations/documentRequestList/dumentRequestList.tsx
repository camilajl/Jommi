import { gql } from '@apollo/client';

export const UPDATE_MANY_DOCUMENT_REQUEST_LIST = gql` 
mutation Mutation($data: DocumentRequestListUpdateManyInput) {
  updateManyDocumentRequestList(data: $data) {
    documentRequestList {
      id
      files
      notes
    }
    documentRequestListSettings {
      id
      mersId
      stateSpecificAppproved
      stateSpecificCompleted
      subServicingAppproved
      subServicingCompleted
      writtenPoliciesAppproved
      writtenPoliciesCompleted
    }
  }
}
`;



