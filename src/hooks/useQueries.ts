import { DocumentNode, useQuery, WatchQueryFetchPolicy } from '@apollo/client';

interface UseQueriesType<T> {
  Query: DocumentNode;
  variables?: object
  initialFetchPolicy?: WatchQueryFetchPolicy | undefined
  nextFetchPolicy?: WatchQueryFetchPolicy | undefined
}

const useQueries = <T>({ Query, variables,initialFetchPolicy , nextFetchPolicy}: UseQueriesType<T>) => {
  const { data, loading, error } = useQuery<T>(Query, {
    variables:{...variables},
    fetchPolicy: 'cache-and-network',
    initialFetchPolicy,
    nextFetchPolicy
  });

  return {
    data,
    error,
    loading,
  };
};

export { useQueries };
