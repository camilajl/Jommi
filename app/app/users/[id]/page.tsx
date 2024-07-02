import UserPage from '@/src/components/Pages/App/User';
import React from 'react';

const User = ({ params }: { params: { id: string } }) => {
  return (
    <UserPage id={params.id} />
  );
};

export default User;
