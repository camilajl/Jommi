'use client'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';
import { alpha, styled } from '@mui/material/styles';


const AutocompleteStyled = styled(Autocomplete)<AutocompleteProps>(({ theme }) => ({
    color: theme.palette.success.main,

    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black !important',
        '& .Mui-focused': {
            borderColor: 'red !important',
        }
    },

}));
export const SelectInput = ({
    isMulti = true,
    defaultOptions,
    setSelected,
    name,
    placeholder,
    selected,
    required = false,
    text,
    onInputChange = (e: any) => { },
    loadOptions,
    isDisabled = false,
}: any) => {
    return (
        <div className='w-full'>
            <span>
                {text}
                {required && <span className='text-red-900'> * </span>}
            </span>
            <AutocompleteStyled
                value={selected}
                onChange={isMulti
                    ? (selected: any): void => {
                        setSelected(selected);
                    }
                    : (selected: any): void => {
                        setSelected(selected);
                    }}
                onInputChange={e => {
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
                id="controllable-states-demo"
                options={defaultOptions}
                fullWidth
                sx={{}}
                renderInput={(params) => <TextField {...params} label="Controllable" />}
            />

        </div>
    );
};