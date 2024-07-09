'use client'
import { ApolloError } from '@apollo/client';
import React, { createContext, ReactNode, useContext, useState } from 'react';

interface LoadingErrorContextProps {
  loading: boolean;
  error: ApolloError | undefined;
  setLoading: (loading: boolean) => void;
  setError: (error: ApolloError | undefined) => void;
}

interface LoadingErrorProviderProps {
  children: ReactNode;
}

const LoadingErrorContext = createContext<LoadingErrorContextProps | undefined>(
  undefined
);

export const LoadingErrorProvider: React.FC<LoadingErrorProviderProps> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApolloError | undefined>();

  return (
    <LoadingErrorContext.Provider
      value={{ loading, error, setLoading, setError }}
    >
      {children}
    </LoadingErrorContext.Provider>
  );
};

export const useLoadingError = () => {
  const context = useContext(LoadingErrorContext);
  if (!context) {
    throw new Error('Error');
  }
  return context;
};
