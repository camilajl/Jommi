import { gql } from 'apollo-server';

const UserTypes = gql`
  input FieldUserRoleFilter {
    name: Enum_RoleName
  }
  input IsUserRoleFilter { 
    some:  FieldUserRoleFilter
  }

  input UserWhereInput {
    AND: [UserWhereInput]
    OR: [UserWhereInput]
    NOT: [UserWhereInput]
    id: StringFilter
    deleted: BoolFilter
    enabled: BoolFilter
    email: StringFilter
    image: StringFilter
    name: StringFilter
    role: IsUserRoleFilter
  }

  input UserOrderByWithRelationInput {
    id: Enum_orderByStates
    deleted: Enum_orderByStates
    enabled: Enum_orderByStates
    email: Enum_orderByStates
    emailVerified: Enum_orderByStates
    image: Enum_orderByStates
    name: Enum_orderByStates
    createdAt: Enum_orderByStates
    updatedAt: Enum_orderByStates
  }

  input UserCreateInput {
    role: ConnectRoleToUserInput
    accounts: AccountCreateNestedManyWithoutUserInput
  }
  input ConnectFieldRoleToUserInput {
    id: String
  }

  input ConnectRoleToUserInput {
    connect: ConnectFieldRoleToUserInput
  }

  input UserUpdateInput {
    role: ConnectRoleToUserInput
  }

  type User {
    totalcount: Int
  }

  type Query {
    users(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput!]
      take: Int
      skip: Int
    ): [User]
  }

  type Mutation {
    createUser(data: UserCreateInput): User
  }
`;
export { UserTypes };
