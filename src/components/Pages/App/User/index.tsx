'use client';
import LoadingErrorLayout from '@/src/components/Layouts/LoadingErrorLayout';
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
  const { loading, error, setLoading, setError } = useLoadingError();

  const { loading: queryLoading, error: queryError } = useQuery<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  >(GET_USER, {
    variables: {
      id: id,
    },
    onCompleted: () => setLoading(false),
    onError: (err) => {
      setLoading(false);
      setError(err);
    },
    initialFetchPolicy: 'network-only',
    nextFetchPolicy: 'network-only',
  });
  const loading2 = loading || false;

  useEffect(() => {
    setLoading(queryLoading);
  }, [queryLoading, queryError, setLoading, setError]);

  return (
    <LoadingErrorLayout loading={loading2} errors={[error]}>
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
    </LoadingErrorLayout>
  );
};

export default UserPage;
