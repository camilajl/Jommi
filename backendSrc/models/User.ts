import { User } from '@/src/graphql/generated';
import { builder } from '../builder';
import { prisma } from '@/config/prisma';

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name', { nullable: true }),
    email: t.exposeString('email'),
    enabled: t.exposeBoolean('enabled'),
    approved: t.exposeBoolean('approved'),
    roles: t.relation('roles'),
    profile: t.relation('profile'),
  }),
});

builder.queryField('users', (t) =>
  t.prismaField({
    type: ['User'],
    resolve: async (query, root, args, ctx, info) => {
      return prisma.user.findMany({ ...query });
    },
  })
);

builder.queryField('userById', (t) =>
  t.prismaField({
    type: 'User',
    args: {
      id: t.arg.id({ required: true }),
    },
    resolve: async (query, root, args, ctx, info) => {
      const user = await prisma.user.findFirstOrThrow({
        ...query,
        where: {
          id: args.id as string, // Ensure the ID is of type string
        },
      });
      return user || null || undefined;
    },
  })
);


builder.mutationField('createUser', (t) =>
  t.prismaField({
    type: 'User',
    args: {
      name: t.arg.string({ required: true }),
      email: t.arg.string({ required: true }),
      enabled: t.arg.boolean({ defaultValue: true }),
      approved: t.arg.boolean({ defaultValue: false }),
      age: t.arg.int({ required: true })
    },
    resolve: async (mutation, root, args, ctx, info) => {
      const user = await prisma.user.create({
        data: {
          name: args.name ?? '',
          email: args.email,
          enabled: args.enabled ?? true,
          approved: args.approved ?? false,
          profile: {
            create: {
              age: 12
            }
          }
        },
      });
      return user;
    },
  })
);
