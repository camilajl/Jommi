import { gql } from '@apollo/client';

export const GET_STATE_SPECIFIC_DOCUMENTS = gql`
 query StateSpecificDocuments($orderBy: StateSpecificOrder,$where: StateSpecifDocumentsWhereInput) {
  stateSpecificDocuments(orderBy: $orderBy,where: $where) {
    approvalNotes
    auditIsComplete
    borrowersName
    clientResponse
    comments
    document
    exemptionNotes
    id
    isApprove
    loanCount
    loanNumber
    loanType
    min
    questionsWithExceptions
    recordingDetails
    mersId
    servicingLoanNumber
    state
  }
}
`;



