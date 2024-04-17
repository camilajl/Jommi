import { makeStyles } from '@mui/styles';


const PRIMARY_COLOR = '#4059AD'
const SECONDARY_COLOR = '#6B9AC4'
const TERTIARY_COLOR = '#F4B942'
const WHITE = '#EFF2F1'

export const stylesDatePicker = makeStyles(() => ({
    custom: {
        '& .MuiFormControl-root':{
            height: '40px',
        },
      '& .MuiInputBase-root': {
        height: '40px',
        minWidth: '300px',
        width: '400px',
        backgroundColor: 'transparent',
        fontSize: '14px',
        textAlign: 'center',
        color: '#707275',
        '&.Mui-focused': {
            color: '#707275',
            fontSize: '14px',
          '& fieldset': {
            borderWidth: '1px 1px 1px 1px',
            borderColor: '#838383',
            color: '#707275',
            fontSize: '14px',
          },
        },
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderRadius: '7px',
        borderWidth: '1px 1px 1px 1px',
        borderColor: '#707275',
      },
      '& .MuiInputLabel-root': {
        color: '#707275',
        fontSize: '14px',
        fontFamily: 'Work Sans',
        height: '40px',

      },
     '& .MuiTextField-root':{
        height: '40px',
        display: 'flex',            // Añadir estas propiedades
        justifyContent: 'center',   // para centrar horizontalmente
        alignItems: 'center',   
     },
     '& .css-z3c6am-MuiFormControl-root-MuiTextField-root': {
      height: '40px',
      backgroundColor: '#678493'
     }
    },
  }));


export {
    PRIMARY_COLOR,
    SECONDARY_COLOR,
    TERTIARY_COLOR,
    WHITE
}