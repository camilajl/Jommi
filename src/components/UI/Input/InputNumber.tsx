'use client'
import React from 'react'
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';


type InputNumberType = {
    label: string
    placeholder?: string
    required?: boolean
    disabled?: boolean
    name: string
    extraClassNames?: string
    thousandSeparator?: boolean;
    value?: number | undefined | null;
}

const InputNumber = ({ label, required = false, name, extraClassNames, value,
 }: InputNumberType) => {
 
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
        <NumberInput
        className='input'
        aria-label="Demo number input"
        placeholder="Type a number…"
        value={value}
        // onChange={(event, val) => setValue(val)}
        />
        </label>
    )
}

export default InputNumber;