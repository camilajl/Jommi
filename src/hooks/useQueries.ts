import { DocumentNode, useQuery } from '@apollo/client';

interface UseQueriesType<T> {
  Query: DocumentNode;
  type: T;
}

const useQueries = <T>({ Query }: UseQueriesType<T>) => {
  const { data, loading, error } = useQuery<T>(Query, {
    fetchPolicy: 'cache-and-network',
  });

  return {
    data,
    error,
    loading,
  };
};

export { useQueries };
