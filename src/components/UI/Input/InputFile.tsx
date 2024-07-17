'use client';
import React from 'react';

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Etiqueta del campo de entrada */
  label?: string;
  /** Indica si el campo está deshabilitado */
  disabled?: boolean;
  /** Indica si el campo es obligatorio */
  required?: boolean;
  extraClassNames?: string;
  type?: string;
}

const InputFile = ({
  type,
  label,
  placeholder,
  required = true,
  name,
  extraClassNames,
  disabled = false,
  accept,
  ...props
}: InputProps) => {
  return (
    <label htmlFor={name} className={` ${'input_label'} ${extraClassNames}`}>
      <span>
        {label}
        {required && <span className='text-red-900'> * </span>}
      </span>

      <input
        type='file'
        name={name}
        placeholder={placeholder}
        className={`${disabled ? 'input-file input__disabled' : 'input-file'} `}
        required={required}
        disabled={disabled}
        accept={accept}
        {...props}
      />
    </label>
  );
};

export default InputFile;
