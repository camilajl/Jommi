
import { prisma } from '@/config/prisma';
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";

export async function checkRoleOnPage(ctx) {
    let url = ctx.resolvedUrl;
    if (url.includes('?')) {
        [url] = url.split('?');
    }
    const { id } = ctx.query;

    if (id) {
        url = url.replace(id, '[id]');
    }
    // const session: any = await getSession({ req: ctx.req });
    const session = await getServerSession(authOptions);
    const roles = await prisma.page.findFirst({
        where: {
            AND: {
                route: {
                    equals: url,
                },
                roles: {
                    some: {
                        role: {
                            users: {
                                some: {
                                    userId: session?.user.id
                                }
                            }
                        }
                    }
                }
            },
        },
    });
    return !roles;
}