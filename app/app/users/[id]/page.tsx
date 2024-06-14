import UserPage from '@/src/components/Pages/App/User';
import React from 'react';

const User = ({ params }: { params: { id: string } }) => {
  console.log('search Params ', params);
  return <UserPage id={params.id} />;
};

export default User;
