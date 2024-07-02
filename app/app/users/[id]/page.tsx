import UserPage from '@/src/components/Pages/App/User';
import { LoadingErrorProvider } from '@/src/context/loadingErrorContext';
import React from 'react';

const User = ({ params }: { params: { id: string } }) => {
  return (
    <LoadingErrorProvider>
      <UserPage id={params.id} />;
    </LoadingErrorProvider>
  );
};

export default User;
