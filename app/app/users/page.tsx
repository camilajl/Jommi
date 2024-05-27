import { prisma } from "@/config/prisma";
import UsersPage from "@/src/components/Pages/App/Users";
import React from "react";


const Users = async () => {
    const users = await prisma.user.findMany({
        orderBy: {
            name: "asc",
        },
        include: {
            roles: true
        },
        take: 10,
        skip: 0,
    })

    return (
        <UsersPage />
    );
};

export default Users;
