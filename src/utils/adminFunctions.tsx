import { prisma } from "@/config/prisma";
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import { headers } from "next/headers";

export function getHeaderProp(headerProp: String) {
  const headerList = headers();
  const prop = headerList.get("x-current-path");
  return prop ?? "";
}

export async function checkRoleOnPage(id?: string) {
  let url = getHeaderProp("x-current-path");

  if (url.includes("?")) {
    [url] = url.split("?");
  }
  if (id) {
    url = url.replace(id, "[id]");
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
            users: {
              some: {
                id: session?.user.id,
              },
            },

          },
        },
      },
    },
  });
  return !!roles;
}

export const checkAccess = async () => {
  const AccessPermission = await checkRoleOnPage();
  if (!AccessPermission) return <div>No tienes acceso a esta página</div>;
};
