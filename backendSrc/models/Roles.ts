import { builder } from '../builder';
import { prisma } from '@/config/prisma';

builder.prismaObject('Role', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    user: t.relation('users'),
  }),
});

builder.queryField('Roles', (t) =>
  t.prismaField({
    type: ['Role'],
    resolve: async (query, root, args, ctx, info) => {
      return prisma.role.findMany({ ...query });
    },
  })
);
