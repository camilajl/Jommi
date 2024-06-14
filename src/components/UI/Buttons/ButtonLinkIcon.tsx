import Link from 'next/link';
import React from 'react';
import { Icon } from '@iconify/react';

export interface ButtonLinkType {
  path: string;
  text: string;
  iconCategory: string;
  iconColor: string;
  onClick?: () => void;
}

export const ButtonLinkIcon = ({
  path,
  text,
  iconCategory,
  iconColor,
}: ButtonLinkType) => {
  return (
    <Link href={path} className='mb-5 flex items-center gap-x-3'>
      <Icon
        icon={iconCategory}
        className={`h-[16px] w-[16px] md:h-[24px] md:w-[24px] ${iconColor} `}
      />
      <p className='font-primaryFont text-lg font-bold text-tertiaryGrey hover:text-xl dark:text-white dark:hover:text-tertiary'>
        {text}
      </p>
    </Link>
  );
};
