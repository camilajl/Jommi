import { gql } from '@apollo/client';



export const GET_ARRRS = gql`
query ARRRs($where: ARRRWhereInput, $orderBy: ARRROrderBy) {
  aRRRs(where: $where, orderBy: $orderBy) {
    id
    category
    checked
    internalOrder
    itemCode
    notes
    number 
    question
    recommendation
  }
}
`;

