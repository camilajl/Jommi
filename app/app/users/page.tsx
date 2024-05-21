import { checkRoleOnPage } from '@/src/utils/adminFunctions';
import React from 'react'


const Users = async () => {

    const a = await checkRoleOnPage()
    return (
        <div>hola</div>
    )
}

export default Users