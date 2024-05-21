import type { NextAuthOptions } from "next-auth";
import AuthProvider from "next-auth/providers/auth0"
import { prisma } from "@/config/prisma";
import { PrismaAdapter } from '@next-auth/prisma-adapter';

export const authOptions: NextAuthOptions = {

    callbacks: {
        async signIn(user: any) {
            if (Object.keys(user).includes('enabled')) {
                return user.enabled;
            }
            //siempre se loguea
            return true;
        },
        async session(session) {
            const newSession = (await prisma.session.findFirst({
                where: {
                    userId: session.user.id,
                },
                include: {
                    user: true,
                },
            })) as any;
            if (!newSession) {
                return null
            }

            return newSession;
        },
    },
    providers: [
        AuthProvider(
            {
                wellKnown: `https://${process.env.AUTH0_DOMAIN}/`,
                clientId: process.env.AUTH0_CLIENT_ID ?? '',
                clientSecret: process.env.AUTH0_CLIENT_SECRET ?? '',
                issuer: process.env.AUTH0_DOMAIN,
                authorization: `https://${process.env.AUTH0_DOMAIN}/authorize?response_type=code&prompt=login`
            }
        ),
    ],
    secret: process.env.NEXT_PUBLIC_SECRET,
    adapter: PrismaAdapter(prisma),
};

