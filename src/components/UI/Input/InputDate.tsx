import React from 'react';

type InputDateType = {
  label?: string;
  name: string;
  disabled?: boolean;
  required?: boolean;
  extraClassNames?: string;
  children?: React.ReactNode;
  defaultValue?: string;
  onChange?: any;
  role?: string;
};

const InputDate = ({
  label,
  name,
  disabled = false,
  required = false,
  extraClassNames = '',
  children,
  defaultValue,
  onChange,
  role,
}: InputDateType) => {

  return (
    <label
      htmlFor={name}
      className={`
        input_label 'flex flex-col ${extraClassNames}`}
    >
      <span>
        {label}
        {required && (
          <span className='font-primaryFont text-lab-red'> * </span>
        )}
      </span>
      <div
        className={disabled ? 'input input__disabled' : ' input bg-white dark:bg-transparent'}
      >
        <input
          type='date'
          name={name}
          disabled={disabled}
          required={required}
          className='w-full focus:outline-none bg-transparents'
          defaultValue={defaultValue}
          onChange={onChange}

        />
      </div>
    </label>
  );
}

export default InputDate;