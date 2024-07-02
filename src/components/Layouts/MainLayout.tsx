import React from 'react';
import Navigation from '../UI/Navigation/Navigation';
import { LoadingErrorProvider } from '@/src/context/loadingErrorContext';

interface MainLayoutInteface {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutInteface) => {
  return (
    <div className='relative flex h-screen w-full flex-row bg-white dark:bg-black'>
      <Navigation />

      <div className='h-full w-full border border-primary px-10 pt-[60px] sm:pt-10'>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
