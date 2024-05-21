import { prisma } from '@/config/prisma';

const UserResolvers = {
  Query: {
    users: async (_: any, args: any) => {

      const userAr = await prisma.user.findMany({
        orderBy: args.orderBy ?? undefined,
        where: args.where,
        take: args.take ?? undefined,
        skip: args.skip ?? undefined,
      });
      const count = await prisma.user.count({
        where: args.where,
      });
      return userAr.map(obj => ({ ...obj, totalcount: count }));
    },

    user: async (_: any, args: any) =>
      prisma.user.findUnique({
        where: {
          id: args.id,
        },
      }),
  },

  Mutation: {
    createUser: async (_: any, args: any) =>
      prisma.user.create({
        data: {
          ...args.data,
          accounts: args.data.accounts,
        },
      }),
  },
};

export { UserResolvers };
