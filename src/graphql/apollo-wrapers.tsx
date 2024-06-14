'use client';
import useApolloClient from '@/src/hooks/useApolloClient';
import { ApolloProvider } from '@apollo/client';
import LoadingCustom from '@/src/components/UI/Loading/Loading';
import React from 'react';

export const ApolloWrapper = ({ children }: React.PropsWithChildren) => {
  const { client }: any = useApolloClient();
  if (!client) return <LoadingCustom open={true} />;
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
