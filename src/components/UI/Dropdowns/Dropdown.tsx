'use client';
import * as React from 'react';
import TextField, {
  FilledTextFieldProps,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
  TextFieldVariants,
} from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';

const AutocompleteStyled = styled(Autocomplete)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '7px',
    borderColor: '#707275',
    backgroundColor: 'transparent',
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-disabled': {
      backgroundColor: 'rgba(0, 0, 0, 0.12)',
    },
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '8px',
    paddingRight: '8px',
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
    fontFamily: 'Work Sans',
    fontSize: '14px',
  },
  '& .MuiAutocomplete-inputRoot': {
    padding: '0px',
  },
}));

export const SelectInput = ({
  isMulti = true,
  defaultOptions,
  setSelected,
  selected,
  required = false,
  text,
  loadOptions,
  label,
}: any) => {
  return (
    <div className='w-full'>
      <span className={`input_label`}>
        {text}
        {required && <span className='text-red-900'> * </span>}
      </span>
      <AutocompleteStyled
        value={selected}
        onChange={
          isMulti
            ? (selected: any): void => {
                setSelected(selected);
              }
            : (selected: any): void => {
                setSelected(selected);
              }
        }
        onInputChange={(e) => {
          if (loadOptions) {
            loadOptions(e);
          }
          //if (e.length > 2) {
          //}
        }}
        onFocus={() => {
          if (loadOptions) {
            loadOptions('');
          }
        }}
        id='controllable-states-demo'
        options={defaultOptions}
        fullWidth
        sx={{}}
        renderInput={(
          params: React.JSX.IntrinsicAttributes & {
            variant?: TextFieldVariants | undefined;
          } & Omit<
              | FilledTextFieldProps
              | OutlinedTextFieldProps
              | StandardTextFieldProps,
              'variant'
            >
        ) => <TextField {...params} label={label} />}
      />
    </div>
  );
};
