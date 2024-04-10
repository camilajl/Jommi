'use client'
import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {AdapterDayjs} from'@mui/x-date-pickers/AdapterDayjs'
import { stylesDatePicker } from '@/src/utils/const';


type InputDateType = {
  label?: string;
  name: string;
  disabled?: boolean;
  required?: boolean;
  extraClassNames?: string;
  children?: React.ReactNode;
  value?: null | undefined;
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
  value,
  onChange,
  role,
}: InputDateType) => {
  const classes = stylesDatePicker();


  return (
    <>
      {/* <span>
        {label}
        {required && (
          <span className='font-primaryFont text-lab-red'> * </span>
        )}
      </span>
      */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date picker"
        className={classes?.custom}
        // onChange={(newValue) => setValue(newValue)}
      />
      </LocalizationProvider>
      
      
    </>
  );
}

export default InputDate;


