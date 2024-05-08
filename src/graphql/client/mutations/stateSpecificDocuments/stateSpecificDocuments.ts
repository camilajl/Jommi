import { gql } from '@apollo/client';

export const UPDATE_MANY_STATE_SPECIFIC_DOCUMENTS = gql`
 mutation UpdateManyStateSpecificDocument($data: StateSpecifDocumentsUpdateManyInput) {
  updateManyStateSpecificDocument(data: $data) {
    id
  }
}
`;



