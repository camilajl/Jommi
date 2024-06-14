import { builder } from '../builder';
import { prisma } from '@/config/prisma';

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name', { nullable: true }),
    email: t.exposeString('email'),
    enabled: t.exposeBoolean('enabled'),
    roles: t.relation('roles'),
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
