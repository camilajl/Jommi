import { makeStyles } from '@mui/styles';
import { GroupBase, StylesConfig, Theme } from 'react-select';

// Añade aca funciones que tengan que ver con estilos
const stylesDatePicker = makeStyles(() => ({
  custom: {
    '& .MuiInputBase-root': {
      height: '48px',
      minWidth: '300px',
      width: '400px',
      backgroundColor: '#fff',
      fontSize: '14px',
      color: '#707275',
      '&.Mui-focused': {
        '& fieldset': {
          borderWidth: '0 0 1px 0',
          borderColor: '#F7D046',
        },
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderRadius: '10px',
      borderWidth: '0 0 1px 0',
      borderColor: '#2B2F33',
    },
  },
}));
//w-full rounded-[7px] border border-secondary_grey bg-transparent px-2 py-2 font-primaryFont text-secondary_grey focus:border-primary focus:outline-none;
/* class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-adornedEnd Mui-readOnly MuiInputBase-readOnly css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root" */
// Custom styles for react-select
const stylesSelect : | StylesConfig<unknown, boolean, GroupBase<unknown>>
  | undefined = {
  container: styles => ({
    ...styles,
    fontFamily: ['Work Sans', 'sans-serif'],
  }),
  control: styles => ({
    ...styles,
    borderRadius: '7px',
    borderColor: '#838383',
    borderWidth: '1px',
    padding: '0 5px',
    background:  'transparent' ,
  }),
  dropdownIndicator: styles => ({
    ...styles,
    color: '#838383',
  }),
  singleValue: styles => ({
    ...styles,
    color: '#B3B3B3',
    fontSize: '14px',
  }),
  menuList: styles => ({
    ...styles,
    color: '#838383',
    fontFamily: ['Work Sans', 'sans-serif'],    
    fontSize: '13px',
    textAlign: 'left',
  }),
  placeholder: styles => ({
    ...styles,
    color: '#B3B3B3',
    fontFamily: ['Work Sans', 'sans-serif'],
    fontSize: '14px',
    textAlign: 'left',
  }),
  multiValueLabel: styles => ({
    ...styles,
    color: '#B3B3B3',
    fontFamily: ['Work Sans', 'sans-serif'],
  }),

  indicatorSeparator: styles => ({ ...styles, display: 'none' }),
  menuPortal: base => ({ ...base, zIndex: 9999 }),
};
// const stylesSelect:
//   | StylesConfig<unknown, boolean, GroupBase<unknown>>
//   | undefined = {
//   container: (styles) => ({
//     ...styles,
//     // width: '100%',
//     fontFamily: 'primaryFont'
//   }),
//   control: (styles, { isDisabled }) => ({
//     ...styles,
//     // width: '100%',
//     // background: isDisabled ? 'transparent' : '#fff',
//     borderRadius: '7px',
//     borderWidth:  '1px',
//     borderColor: isDisabled ? 'none' : '#838383',
//     // boxShadow: 'none',
//     // cursor: 'pointer',
//     // '&:hover': {},
//     // '&:active': {
//     //   borderColor: '#F7D046',
//     // },
//   }),
//   dropdownIndicator: (styles, { isDisabled }) => ({
//     ...styles,
//     color: isDisabled ? '#fff' : '#2B2F33',
//     '&:hover': { color: '#F7D046' },
//   }),
//   singleValue: (styles) => ({
//     ...styles,
//     color: '#838383',
//     fontSize: '12px',
//   }),
//   // menu: (styles) => ({
//   //   ...styles,
//   //   width: '100%',
//   //   boxSizing: 'border-box',
//   // }),
//   menuList: (styles) => ({
//     ...styles,
//     // width: '100%',
//     color: '#838383',
//     fontSize: '12px',
//     textAlign: 'left',
//     fontFamily: 'primaryFont'

//   }),
//   placeholder: (styles) => ({
//     ...styles,
//     color: '#838383',
//     fontFamily: 'Work Sans',
//     fontSize: '12px',
//     textAlign: 'left',
//   }),
//   multiValueLabel: (styles) => ({
//     ...styles,
//     color: '#000000',
//     fontFamily: 'Work Sans',
//     backgroundColor: '#9747FF',
//   }),
//   multiValueRemove: (styles) => ({
//     ...styles,
//     color: '#000000',
//     backgroundColor: '#9747FF',
//     '&:hover': {
//       color: '#000000', // Color del icono al hacer hover
//     },
//   }),
//   clearIndicator: (styles) => ({
//     ...styles,
//     color: '#2B2F33', // Color inicial del icono
//     '&:hover': {
//       color: '#9747FF', // Color del icono al hacer hover
//     },
//   }),
//   indicatorSeparator: (styles) => ({ ...styles, display: 'none' }),
//   menuPortal: (base) => ({ ...base, zIndex: 9999 }),
//   valueContainer: (styles, { isDisabled }) => ({
//     ...styles,
//     padding: isDisabled ? '0px' : '6px',
//   }),
// };

const themeSelect = (theme: Theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: '#838383', // Item actual
    primary50: '#f0f2f5', // Item seleccionado
    primary25: '#f0f2f5', // Hover item

    danger: '#e83a30',
    dangerLight: '#FBFCFC',
    neutral0: '#FBFCFC',
    neutral10: '#E3E935',
    neutral30: '#ff000010',
    neutral40: '#215B38',
    neutral60: '#5e61e8',
  },
});

export { stylesDatePicker, stylesSelect, themeSelect };
