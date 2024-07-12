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

interface UserPageInterface {
  id: string;
}

const UserPage = ({ id }: UserPageInterface) => {
  //const { setErrorLayout } = useLoadingErrorValues();
  const { error, setLoading, setError } = useLoadingError();

   const { data: userByIdData , loading: queryLoading, error: queryError } = useQueries<GetUserByIdQuery>({
    Query: GET_USER,
    variables:{id: id,},
    initialFetchPolicy: 'network-only',
    nextFetchPolicy: 'network-only',
  });

<<<<<<< HEAD
  const userData = userByIdData?.userById

  console.log('userData  :>> ', userData );

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

  const error2 = "hubo un error";
=======
  const error2 = 'hubo un error';
>>>>>>> 65264fe (df2s)
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

   const initialValues: Partial<GetUserByIdQuery['userById']> = useMemo(() => {
    if (!userData) return {};
    return {
      name: userData?.name,
      email: userData?.email,
     
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

  return (
    <div className='flex flex-col space-y-10'>
      <form onSubmit={formik.handleSubmit} className='space-y-5'>
        <div className='grid grid-cols-3 gap-3'>
          <InputFile
            label={'Image'}
            onChange={formik?.handleChange}
          />
          <InputText label={'Nombre'} placeholder={'Nombre'} value={formik?.values?.name ?? ''} onChange={formik?.handleChange}/>
          <InputText
            label={'Email'}
            placeholder={'Email@example.com'}
            type='email'
            value={formik?.values?.email} 
            onChange={formik?.handleChange}
          />
          <InputSelect label={'Rol'} options={[{label:'Admin' , value: 'admin'},{label:'Client' , value: 'Client'}]} />
          <InputSelect label={'Aprobado'} options={[{label:'Si' , value: 'Si'},{label:'No' , value: 'No'}]} />
          <InputSelect label={'Estado'} options={[{label:'value1' , value: 'value1'}]} />
        </div>
        <div className='flex gap-2 items-center justify-center'>
          <Button
            text='Cancel'
          />
          <Button
            type='submit'
            text='Save'
            
          />
        </div>
      </form>
    </div>
  );
};

export default UserPage;
