import React from 'react';
import { InputCheck } from '../Input/InputCheck';

interface CardCheckType {
  checkEnable?: boolean;
  checkDisabled?: boolean;
  onChangeEnabled: () => void;
  onChangeDisabled: () => void;
  error?: boolean | string | null | undefined;
  title: string;
  required: boolean;
  firstInputName: string;
  firstInputPlaceholder?: string;
  firstInputLabel?: string;
  secondInputName: string;
  secondInputPlaceholder?: string;
  secondInputLabel?: string;
}
const CardCheckEnabled = ({
  firstInputName,
  firstInputPlaceholder,
  firstInputLabel,
  secondInputName,
  secondInputPlaceholder,
  secondInputLabel,
  checkEnable,
  checkDisabled,
  onChangeEnabled,
  onChangeDisabled,
  error,
  title,
  required,
}: CardCheckType) => (
  <div className=''>
    <p className='text-center font-bold'>{title}</p>
    <div className='flex items-center justify-center gap-6'>
      <div>
        <InputCheck
          name={firstInputName}
          placeholder={firstInputPlaceholder ?? ''}
          label={firstInputLabel ?? ''}
          type='radio'
          checked={checkEnable}
          onChange={onChangeEnabled}
          required={required}
        />
      </div>
      <div>
        <InputCheck
          name={secondInputName}
          placeholder={secondInputPlaceholder ?? ''}
          label={secondInputLabel ?? ''}
          type='radio'
          checked={checkDisabled}
          onChange={onChangeDisabled}
          required={required}
        />
      </div>
    </div>
    <p className='text-secondary-red text-sm'>{error}</p>
  </div>
);

export { CardCheckEnabled };
