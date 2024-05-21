import { useSession } from 'next-auth/react';
import { headers } from 'next/headers';
import React from 'react'


const Users = () => {
    const headerList = headers();
    const pathname = headerList.get("x-current-path");
    console.log('pathname', headerList)
    return (
        <div>hola</div>
    )
}

export default Users