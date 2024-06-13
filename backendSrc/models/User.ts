import { builder } from "../builder";
import { prisma } from "@/config/prisma";

builder.prismaObject("User", {
    fields: t => ({
        id: t.exposeID("id"),
        name: t.exposeString("name", { nullable: true }),
        email: t.exposeString("email"),
        enabled: t.exposeBoolean("enabled"),
        roles: t.relation("roles"),
    }),
})

builder.queryField("users", (t) =>
    t.prismaField({
        type: ["User"],
        resolve: async (query, root, args, ctx, info) => {
            return prisma.user.findMany({ ...query });
        },
    })
);
