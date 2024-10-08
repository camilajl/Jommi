'use client';
import { signIn } from 'next-auth/react';
import LoadingCustom from '@/src/components/UI/Loading/Loading';
import { useEffect } from 'react';
const SignIn = () => {
  //change component to normal login page without auth0
  useEffect(() => {
    signIn('auth0');
  }, []);

  return <LoadingCustom open={true} />;
};
export default SignIn;
