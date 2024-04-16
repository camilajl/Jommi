'use client'
import * as React from 'react';
import Select from 'react-select';

const themeSelect =  (theme: { colors: any; }) => ({
    ...theme,
    colors: {
        ...theme.colors,
        primary: '#4D4D4D',
        primary50: '#FFFFFF',
        primary25: '#FFFFFF',
        danger: '#29CAE5',
        dangerLight: '#29CAE5',
        neutral0: '#FFFFFF', // background
        neutral30: '#14517A', // hover:border
        neutral40: '#052636', // hover:icons
        neutral60: '#14517A', // focus:icons
    },
});

const stylesSelect = {
    container: (styles: any) => ({
        ...styles,
        marginTop: '0 !important',
        marginLeft: '1px !important',
        marginRight: '2px !important',

    }),
    control: (styles: any) => ({
        ...styles,
        borderRadius: '7px',
        borderColor: '#838383',
    }),
    dropdownIndicator: (styles: any) => ({
        ...styles,
        color: '#0A283D',
    }),
    singleValue: (styles: any) => ({
        ...styles,
        color: '#0A283D',
    }),
    menuList: (styles: any) => ({
        ...styles,
        color: '#0A283D',
    }),
    placeholder: (styles: any) => ({
        ...styles,
        color: '#B0B4B8',
        fontFamily: 'Work Sans',
        fontSize: '14px',
    }),
    multiValueLabel: (styles: any) => ({
        ...styles,
        color: '#0A283D',
    }),

    indicatorSeparator: (styles: any) => ({ ...styles, display: 'none' }),
    menuPortal: (base: any) => ({ ...base, zIndex: 9999, position: 'absolute' }),
};

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
            <Select
                menuPosition='fixed'
                menuPortalTarget={document.body}
                isMulti={isMulti}
                options={defaultOptions || []}
                name={name}
                placeholder={placeholder}
                value={selected}
                isDisabled={isDisabled}
                getOptionLabel={e => e.label}
                getOptionValue={e => e.value}
                onFocus={() => {
                    loadOptions('');
                }}
                onInputChange={e => {
                    //if (e.length > 2) {
                    loadOptions(e);
                    //}
                }}
                onChange={
                    isMulti
                        ? (selected: any): void => {
                            setSelected(selected);
                        }
                        : (selected: any): void => {
                            setSelected(selected);
                        }
                }
                styles={stylesSelect}
                theme={themeSelect}
            />
        </div>
    );
};