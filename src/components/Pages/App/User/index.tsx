'use client';

import { SelectInput } from '@/src/components/UI/Dropdowns/Dropdown';
import InputText from '@/src/components/UI/Input/InputText';
import { GET_USER } from '@/src/graphql/User/users.query';
import { GetUserByIdQuery, GetUserByIdQueryVariables } from '@/src/graphql/generated';
import { useQuery } from '@apollo/client';
import React from 'react';

interface UserPageInterface {
  id: string;
}

const UserPage = ({ id }: UserPageInterface) => {
  const { loading, error } = useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GET_USER, {
    variables: {
      id: id
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! ${error.message} </div>;
  return (
    <div className='flex flex-col space-y-10'>
      <form action=''>
        <div className='grid grid-cols-3 gap-3'>
          <InputText label={'Nombre'} placeholder={'Nombre'} />
          <InputText
            label={'Email'}
            placeholder={'Email@example.com'}
            type='email'
          />
          <SelectInput label='Rol' defaultOptions={[]} />
          <SelectInput label={'Habilitado'} defaultOptions={[]} />
        </div>
      </form>
    </div>
  );
};

export default UserPage;
