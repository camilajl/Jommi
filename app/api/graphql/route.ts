import 'reflect-metadata';
import 'ts-tiny-invariant';
import { ApolloServer, BaseContext } from '@apollo/server';
import { getServerSession } from 'next-auth';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextRequest } from 'next/server';
import { prisma } from '@/config/prisma';
import { authOptions } from '@/config/auth';
import { schema } from '@/backendSrc/schema';

const startServer = async (req: any) => {
  const session = await getServerSession(authOptions);
  const apolloServer = new ApolloServer<BaseContext>({
    schema: schema,
    introspection: true,
  });
  //podemos validar aquí la sessión
  return await startServerAndCreateNextHandler<NextRequest>(apolloServer, {
    context: async (req, res) => ({ req, res, session, db: prisma }),
  })(req);
};

export async function GET(request: Request) {
  return await startServer(request);
}
export async function POST(request: Request) {
  return await startServer(request);
}
