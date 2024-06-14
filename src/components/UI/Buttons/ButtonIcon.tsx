import React from 'react';
import { Icon } from '@iconify/react';

export interface ButtonLinkType {
  text?: string;
  iconCategory: string;
  iconColor?: string;
  onClick?: () => void;
  extraClassName?: string;
  iconExtraClassName?: string;
}

export const ButtonIcon = ({
  text,
  iconCategory,
  iconColor,
  onClick,
  extraClassName,
  iconExtraClassName,
}: ButtonLinkType) => {
  return (
    <button type='button' onClick={onClick} aria-label={iconCategory}>
      <div className='flex items-center gap-x-3'>
        <Icon
          icon={iconCategory}
          color={iconColor}
          className={`h-[16px] w-[16px] md:h-[24px] md:w-[24px] ${iconExtraClassName} `}
        />
        {text ? (
          <p
            className={`font-primaryFont text-sm font-bold lg:text-lg ${extraClassName}`}
          >
            {text}
          </p>
        ) : null}
      </div>
    </button>
  );
};
