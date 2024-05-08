import { gql } from '@apollo/client';

export const GET_CUSTOM_SIDEBAR_ELEMENTS = gql`
query SidebarElements($where: SidebarElementWhereInput) {
  customSidebarElements(where: $where) 
}
`;

export const GET_SIDEBAR_ELEMENTS = gql`
query SidebarElements($where: SidebarElementWhereInput) {
  sidebarElements(where: $where) {
    id
    name
    route
  }
}
`;

