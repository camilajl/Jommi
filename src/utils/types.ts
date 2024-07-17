import { GetUserByIdQuery } from '@/src/graphql/generated';
import { Profile, Role } from '@prisma/client';

export type Generic1 = {
  hola: string;
};

export interface ExtendedUser extends GetUserByIdQuery {
  profile: Profile;
  roles: Role[];
}
