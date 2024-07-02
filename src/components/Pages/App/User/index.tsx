'use client';
import { SelectInput } from '@/src/components/UI/Dropdowns/Dropdown';
import InputText from '@/src/components/UI/Input/InputText';
import { useLoadingError } from '@/src/context/loadingErrorContext';
//import { useLoadingErrorValues } from '@/src/context/loadingLayoutAtom';
import { GET_USER } from '@/src/graphql/User/users.query';
import {
  GetUserByIdQuery,
  GetUserByIdQueryVariables,
} from '@/src/graphql/generated';
import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';

interface UserPageInterface {
  id: string;
}

const UserPage = ({ id }: UserPageInterface) => {
  //const { setErrorLayout } = useLoadingErrorValues();
  const { error, setLoading, setError } = useLoadingError();

  const { loading: queryLoading, error: queryError } = useQuery<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  >(GET_USER, {
    variables: {
      id: id,
    },
    initialFetchPolicy: 'network-only',
    nextFetchPolicy: 'network-only',
  });

  const error2 = 'hubo un error';
  const loading = true;
  useEffect(() => {
    console.log('query loading ', queryLoading);
    if (queryLoading) {
      setLoading(true);
    } else {
      console.log('Abc');
      setLoading(false);
    }

    if (queryError || error2) {
      setError(queryError);
    }
  }, [queryLoading, queryError, error2, setLoading, setError]);

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
