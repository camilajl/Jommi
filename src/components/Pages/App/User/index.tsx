'use client';
import * as Yup from 'yup';
import { InputSelect } from '@/src/components/UI/Input/InputSelect';
import InputText from '@/src/components/UI/Input/InputText';
import { useLoadingError } from '@/src/context/loadingErrorContext';
//import { useLoadingErrorValues } from '@/src/context/loadingLayoutAtom';
import { GET_USER } from '@/src/graphql/User/users.query';
import {
  GetUserByIdQuery,
  GetUserByIdQueryVariables,
} from '@/src/graphql/generated';
import { useQuery } from '@apollo/client';
import { useFormik } from 'formik';
import React, { useEffect, useMemo } from 'react';
import Button from '@/src/components/UI/Buttons/Button';
import { useQueries } from '@/src/hooks/useQueries';
import InputFile from '@/src/components/UI/Input/InputFile';
import { roleOptions } from '@/src/utils/enumOptions';
import { InputCheck } from '@/src/components/UI/Input/InputCheck';
import { ExtendedUser } from '@/src/utils/types';
import { CardCheckEnabled } from '@/src/components/UI/Card/CardCheckEnabled';

interface UserPageInterface {
  id: string;
}

const UserPage = ({ id }: UserPageInterface) => {
  //const { setErrorLayout } = useLoadingErrorValues();
  const { error, setLoading, setError } = useLoadingError();

  const {
    data: userByIdData,
    loading: queryLoading,
    error: queryError,
  } = useQueries<ExtendedUser>({
    Query: GET_USER,
    variables: { id: id },
    initialFetchPolicy: 'network-only',
    nextFetchPolicy: 'network-only',
  });

  const userData = userByIdData?.userById;



  // const { loading: queryLoading, error: queryError } = useQuery<
  //   GetUserByIdQuery,
  //   GetUserByIdQueryVariables
  // >(GET_USER, {
  //   variables: {
  //     id: id,
  //   },
  //   initialFetchPolicy: 'network-only',
  //   nextFetchPolicy: 'network-only',
  // });

  const error2 = 'hubo un error';
  const loading = true;
  useEffect(() => {

    if (queryLoading) {
      setLoading(true);
    } else {

      setLoading(false);
    }

    if (queryError || error2) {
      setError(queryError);
    }
  }, [queryLoading, queryError, error2, setLoading, setError]);

  const initialValues: Partial<GetUserByIdQuery['userById']> = useMemo(() => {
    if (!userData) return {};
    return {
      name: userData?.name,
      email: userData?.email,
      roles: userData?.roles,
      profile: userData?.profile,
      approved: userData?.approved,
      enabled: userData?.enabled,
    };
  }, [userData]);

  const validationSchema = useMemo(
    () =>
      Yup.object({
        name: Yup.string().required('Field required'),
      }),
    []
  );
  // useFormik
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      // Submit handler code
    },
    enableReinitialize: true,
  });
  console.log('object :>> ', roleOptions);

  return (
    <div className='flex flex-col space-y-10'>
      <form onSubmit={formik.handleSubmit} className='space-y-5'>
        <div className='grid grid-cols-3 gap-3'>
          <InputFile
            accept='image/png,image/jpeg'
            label={'Image'}
            onChange={formik?.handleChange}
          />
          <InputText
            label={'Nombre'}
            placeholder={'Nombre'}
            value={formik?.values?.name ?? ''}
            onChange={formik?.handleChange}
          />
          <InputText
            label={'Email'}
            placeholder={'Email@example.com'}
            type='email'
            value={formik?.values?.email}
            onChange={formik?.handleChange}
          />
          <InputText
            label={'Edad'}
            name='age'
            placeholder={'18'}
            type='text'
            value={formik?.values?.profile?.age}
            onChange={formik?.handleChange}
          />
          <InputSelect
            label={'Rol'}
            options={roleOptions}
            placeholder={'Admin'}
            value={formik?.values?.roles?.[0]?.name}
          />
          <CardCheckEnabled
            firstInputName='enabled'
            firstInputLabel='Si'
            onChangeEnabled={() => formik.setFieldValue('enabled', true)}
            onChangeDisabled={() => formik.setFieldValue('enabled', false)}
            title={'Habilitado'}
            required={false}
            secondInputName='enabled'
            secondInputLabel='No'
            checkEnable={formik?.values?.enabled}
            checkDisabled={!formik?.values?.enabled}
          />
          <CardCheckEnabled
            firstInputName='approved'
            firstInputLabel='Si'
            onChangeEnabled={() => formik.setFieldValue('approved', true)}
            onChangeDisabled={() => formik.setFieldValue('approved', false)}
            title={'Aprobado'}
            required={false}
            secondInputName='approved'
            secondInputLabel='No'
            checkEnable={formik?.values?.approved}
            checkDisabled={!formik?.values?.approved}
          />
        </div>
        <div className='flex items-center justify-center gap-2'>
          <Button text='Cancel' />
          <Button type='submit' text='Save' />
        </div>
      </form>
    </div>
  );
};

export default UserPage;
