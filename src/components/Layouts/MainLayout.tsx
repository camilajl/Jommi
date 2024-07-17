'use client';
import React from 'react';
import Navigation from '../UI/Navigation/Navigation';
import { useLoadingError } from '@/src/context/loadingErrorContext';
import LoadingCustom from '../UI/Loading/Loading';

interface MainLayoutInteface {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutInteface) => {
  const { error, loading } = useLoadingError();
  return (
    <div className='relative flex h-screen w-full flex-row bg-white dark:bg-black'>
      <Navigation />
      <div className='h-full w-full border border-primary px-10 pt-[60px] sm:pt-10'>
        <div className='relative'>{loading && <LoadingCustom />}</div>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
