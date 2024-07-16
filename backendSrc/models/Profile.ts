import { profile } from 'console';
import { builder } from '../builder';
import { prisma } from '@/config/prisma';

builder.prismaObject('Profile', {
  fields: (t) => ({
    id: t.exposeID('id'),
    userId: t.exposeString('userId', { nullable: true }),
    roleId: t.exposeString('roleId'),
    document: t.exposeString('document'),
    role: t.relation('role'),
    user: t.relation('user'),
    phone: t.exposeString('phone'),
    age: t.exposeInt('age'),
    documentType: t.exposeString('documentType'),
  }),
});

builder.queryField('profiles', (t) =>
  t.prismaField({
    type: ['Profile'],
    resolve: async (query, root, args, ctx, info) => {
      return prisma.profile.findMany({ ...query });
    },
  })
);

builder.queryField('profileById', (t) =>
  t.prismaField({
    type: 'Profile',
    args: {
      id: t.arg.id({ required: true }),
    },
    resolve: async (query, root, args, ctx, info) => {
      const profile = await prisma.profile.findFirstOrThrow({
        ...query,
        where: {
          id: args.id as string, // Ensure the ID is of type string
        },
      });
      return profile || null || undefined;
    },
  })
);
