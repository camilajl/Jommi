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

const InputText = ({
  type,
  label,
  placeholder,
  required = true,
  name,
  extraClassNames,
  disabled = false,
  ...props
}: InputProps) => {
  return (
    <label htmlFor={name} className={` ${'input_label'} ${extraClassNames}`}>
      <span>
        {label}
        {required && <span className='text-red-900'> * </span>}
      </span>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`${disabled ? 'input input__disabled' : 'input'} `}
        required={required}
        disabled={disabled}
        {...props}
      />
    </label>
  );
};

export default InputText;
