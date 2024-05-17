import Link from 'next/link'
import React from 'react'
import { Icon } from '@iconify/react';

export interface ButtonLinkType {
  text?: string;
  iconCategory: string;
  iconColor: string;
  onClick?: () => void;
  extraClassName?: string;
}

export const ButtonIcon = ({ text, iconCategory, iconColor, onClick, extraClassName }: ButtonLinkType) => {
  return (
    <button type='button' onClick={onClick}>
      <div className='flex gap-x-3 items-center '>
        <Icon
          icon={iconCategory}
          color={iconColor}
          className='h-[16px] w-[16px] md:h-[24px] md:w-[24px]'
        />
        {text ?
          <p className={`font-primaryFont font-bold text-sm lg:text-lg  ${extraClassName}`}>{text}</p> : null}
      </div>
    </button>


  )
}
