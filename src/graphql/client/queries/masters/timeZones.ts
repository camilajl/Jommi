import { gql } from '@apollo/client';

export const GET_TIME_ZONES = gql`
query TimeZones($where: TimeZoneWhereInput) {
  timeZones(where: $where) {
    abbreviation
    name
    id
  }
}
`;

