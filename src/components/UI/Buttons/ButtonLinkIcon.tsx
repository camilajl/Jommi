import Link from 'next/link'
import React from 'react'
import { Icon } from '@iconify/react';

export interface ButtonLinkType {
  path: string;
  text: string;
  iconCategory: string;
  iconColor: string;
  onClick?: () => void;
}

export const ButtonLinkIcon = ({ path, text, iconCategory, iconColor, onClick }: ButtonLinkType) => {
  return (

    <Link href={path} className='flex mb-5 gap-x-3 items-center  '>
      <Icon
        icon={iconCategory}
        color={iconColor}
        className='h-[16px] w-[16px] md:h-[24px] md:w-[24px]'
      />
      <p className='font-primaryFont font-bold  text-lg text-white hover:text-tertiary hover:text-xl'>{text}</p>
    </Link>

  )
}
