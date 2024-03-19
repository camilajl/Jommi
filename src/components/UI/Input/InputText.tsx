'use client'
import React from 'react'


type InputType = {
    type?: 'text' | 'email' | 'password'
    label: string
    placeholder: string
    required?: boolean
    disabled?: boolean
    name?: string
    extraClassNames?: string
}

const InputText = ({ type, label, placeholder, required = true , name, extraClassNames, disabled = false }: InputType) => {
    return (
        
        <label
        htmlFor={name}
        className={` ${      
            'input_label'           
        } ${extraClassNames}`}
      >
        <span>
          {label}
          {required && <span className='text-red-900'> * </span>}
        </span>
      
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={`${
              disabled ? 'input input__disabled' : 'input'
            } `}
            required={required}
            disabled={disabled}
          />
           </label>

    )
}

export default InputText;