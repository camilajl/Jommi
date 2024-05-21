import { gql } from 'apollo-server';

const generals = gql`
  scalar number

  input StringFilter {
    equals: String
    in: [String]
    notIn: [String]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: Enum_WhereMode
  }

  input DateTimeFilter {
    equals: DateTime
    in: [DateTime]
    notIn: [DateTime]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
  }

  input FloatFilter {
    equals: Float
    in: [Float]
    notIn: [Float]
    lt: Float
    lte: Float
    gt: Float
    gte: Float
  }

  input BoolFilter {
    equals: Boolean
  }

  input someFilter {
    equals: Boolean
  }

  type AvgAggregateType {
    value: number
  }

  input AvgAggregateInput {
    value: Enum_orderByStates
  }
  enum Enum_orderByStates {
    asc
    desc
  }

  enum Enum_WhereMode {
    default
    insensitive
  }
`;
export const customTypes = [generals];
