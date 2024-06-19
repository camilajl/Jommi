import { ApolloError } from '@apollo/client';
import { atom, useAtom } from 'jotai';

const loadingLayoutAtom = atom({});
const errorLayoutAtom = atom('');

const useLoadingErrorValues = () => {
  const [loadingErrorLayout, setLoadingErrorLayout] = useAtom(
   loadingLayoutAtom 
  );

   const [errorLayout, setErrorLayout] = useAtom(
   errorLayoutAtom
  );

  return {
  loadingErrorLayout, 
  setLoadingErrorLayout,
  errorLayout, 
  setErrorLayout
  };
};

export { useLoadingErrorValues };
