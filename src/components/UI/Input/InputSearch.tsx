import { Icon } from '@iconify/react';
import * as React from 'react';

type InputType = {
  type?: React.HTMLInputTypeAttribute;
  name: string;
  label?: string;
  extraClassNames?: string;
  placeholder: string;
  required?: boolean;
  children?: React.ReactNode;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  onClick?: () => void;
  onKeyPress?: () => void;
};

function InputSearch({
  type,
  name,
  label,
  placeholder,
  required = false,
  children,
  value,
  extraClassNames = '',
  onChange,
  disabled = false,
  onClick,
}: InputType) {
  return (
    <label
      htmlFor={name}
      className={`${
        children ? 'relative h-full' : 'flex flex-col'
      } ${extraClassNames}`}
    >
      <span>
        {label}
        {required && <span className='text-red-900'> * </span>}
      </span>
      <div className='relative flex'>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={`${disabled ? 'input__disabled' : 'input'} py-2 pl-2 ${
            type === 'text' ? 'pr-2' : 'pr-8'
          } w-full rounded-[5px]`}
          required={required}
          onChange={onChange}
          value={value}
          disabled={disabled}
        />

        {onClick && (
          <span className='absolute inset-y-0 right-0 flex items-center pr-3'>
            <button type='button' onClick={onClick} aria-label={name}>
              <Icon
                icon='material-symbols:search-rounded'
                color='#838383'
                className='h-[25px] w-[25px]'
              />
            </button>
          </span>
        )}
      </div>
      {children}
    </label>
  );
}

export default InputSearch;
