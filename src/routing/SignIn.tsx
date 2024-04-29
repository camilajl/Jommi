'use client'
import { signIn } from 'next-auth/react';
import LoadingCustom from '@/src/components/UI/Loading/loading';
import { useEffect } from 'react';
const SignIn = () => {
    useEffect(() => { signIn('auth0'); }, [])

    return (
        <LoadingCustom open={true} />
    );
}
export default SignIn;
