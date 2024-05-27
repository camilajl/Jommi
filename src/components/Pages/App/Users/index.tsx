import UserTable from '@/src/components/UI/Table/UserTable'
import React from 'react'
const users = [
    {
        id: 1,
        name: "camila",
        email: "camilajimenez@gmail.com",
        role: "admin",
        enabled: true,
    },
    {
        id: 2,
        name: "jesus",
        email: "jesus garcia@gmail.com",
        role: "admin",
        enabled: true,
    },
    {
        id: 3,
        name: "otro user",
        email: "user@gmail.com",
        role: "admin",
        enabled: true,
    },
];
const UsersPage = () => {

    return (
        <div className="flex items-center justify-center">
            {/*COMPONENTE SEARCH */}
            <UserTable users={users} />

        </div>
    )
}

export default UsersPage