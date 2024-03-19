'use client'
import React from 'react'
import { NumericFormat } from 'react-number-format'


type InputNumberType = {
    label: string
    placeholder?: string
    required?: boolean
    disabled?: boolean
    name: string
    extraClassNames?: string
    thousandSeparator?: boolean;
    prefix?: string;
    suffix?: string;
    fixedDecimalScale?: boolean;
    decimalScale?: number;
    allowNegative?: boolean;
    allowLeadingZeros?: boolean;
    value?: string;
    min?: number;
    max?: number;
    step?: number;
}

const InputNumber = ({ label, placeholder, required = false, name, extraClassNames, disabled = false, thousandSeparator = true,
  allowNegative = false,
  decimalScale = 0,
  fixedDecimalScale = false,
  allowLeadingZeros = false,
  prefix = '',
  suffix = '',
  value,
  min,
  max,
  step, }: InputNumberType) => {
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
          <NumericFormat
            name={name}
            placeholder={placeholder}
            className={`${
              disabled ? 'input input__disabled' : 'input'
            } `}
            required={required}
            disabled={disabled}
            thousandSeparator={thousandSeparator}
            fixedDecimalScale={fixedDecimalScale}
            decimalScale={decimalScale}
            allowNegative={allowNegative}
            allowLeadingZeros={allowLeadingZeros}
            prefix={prefix}
            suffix={suffix}
            defaultValue={value}
            min={min}
            max={max}
            step={step}
          />
        </label>
    )
}

export default InputNumber;