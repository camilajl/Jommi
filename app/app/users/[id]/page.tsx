import { checkRoleOnPage } from '@/src/utils/adminFunctions'
import React from 'react'

const User = async ({ params, searchParams }: { params: { id: string }, searchParams: { condition: string } }) => {

    const a = await checkRoleOnPage()
    if (a === false) {
        return <div>NO TIENES ACCESO</div>
    }
    return (
        <div>User</div>
    )
}

export default User