'use client';
import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { ButtonIcon } from '../Buttons/ButtonIcon';
import { useIsMobile } from '@/src/hooks/useIsMobile';

const Navigation = () => {
  const { isMobileDevice } = useIsMobile();
  const [open, setOpen] = useState(!isMobileDevice);

  return (
    <div className='transition-all delay-150 ease-in-out'>
      <Sidebar open={open} setOpen={setOpen} />
      <div className='fixed right-0 top-0 flex h-[40px] w-12 items-center justify-end sm:hidden'>
        <div className='flex w-[100px] justify-center'>
          <ButtonIcon
            iconCategory={'charm:menu-hamburger'}
            iconColor={'#505050'}
            iconExtraClassName={'h-[30px] w-[30px]'}
            onClick={() => {
              setOpen(!open);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
