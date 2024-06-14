import React from 'react';
import { signOut } from 'next-auth/react';
import { routes } from '@/src/utils/const';
import { ButtonLinkIcon } from '../Buttons/ButtonLinkIcon';
import { ButtonIcon } from '../Buttons/ButtonIcon';

interface SidebarInterface {
  open: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ open }: SidebarInterface) => {
  return (
    <>
      <div
        className={`fixed left-0 top-0 h-full resize-x border border-primary bg-white transition-all delay-150 ease-in-out sm:static dark:bg-black ${open ? 'w-60 px-5 md:w-80 md:px-20' : 'w-0'} z-10 flex flex-col justify-between truncate py-10`}
      >
        <div className={`w-40 space-y-10 self-center`}>
          <h1 className='font-primaryFont text-5xl font-medium text-jommi_purple dark:text-tertiary'>
            jommi.
          </h1>
          <div className=' '>
            {routes?.map((route) => (
              <ButtonLinkIcon
                key={route.id}
                path={route.path}
                text={route.name}
                iconCategory={route.iconCategory}
                iconColor={'text-black dark:text-white'}
              />
            ))}
          </div>
        </div>
        <div className={`flex justify-center md:justify-start`}>
          <ButtonIcon
            text='Cerrar sesión'
            iconCategory={'clarity:power-solid'}
            iconColor={'#EB591B'}
            extraClassName='text-jommi_red hover:text-xl'
            onClick={() => {
              signOut();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
