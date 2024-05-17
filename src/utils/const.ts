import { makeStyles } from '@mui/styles';


const PRIMARY_COLOR = '#4059AD'
const SECONDARY_COLOR = '#6B9AC4'
const TERTIARY_COLOR = '#F4B942'
const WHITE = '#EFF2F1'

export const stylesDatePicker = makeStyles(() => ({
    custom: {
        '& .MuiFormControl-root':{
            height: '20px',
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
            '& .MuiInputLabel-root':{
              color: '#EB591B',
            },
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
        color: '#707275',
        fontSize: '14px',
      },
      '& .MuiInputLabel-root': {
        color: '#EB591B',
        fontSize: '15px',
        fontFamily: 'Work Sans',
        height: '20px',
       
        

      },
     '& .MuiTextField-root':{
        color: '#707275',
        height: '20px',
        display: 'flex',            
        justifyContent: 'center',   
        alignItems: 'center',   
     },
    // '& .MuiInputBase-input':{
    //   backgroundColor: '#232435',
    //  },
    //  '& .MuiOutlinedInput-input':{
    //   backgroundColor: '#EB591B',
    //  },
    //  '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input':{
    //   backgroundColor: '#FFFB00',
    //   height: '20px',
    //  }
    
    },
  }));

  const routes = [
    {
    id: 1,
    name: 'Inicio',
    path: '/app',
    iconCategory: 'fluent:home-48-filled'
},
{
    id: 2,
    name: 'Servicios',
    path: '/app/jobs',
    iconCategory:'mdi:account-service'
    
},
{
    id: 3,
    name: 'Usuarios',
    path: '/app/users',
    iconCategory:'gridicons:multiple-users'
    
},
{
    id: 4,
    name: 'Perfil',
    path: '/app/profile',
    iconCategory:'mingcute:profile-fill'
},
{
    id: 5,
    name: 'Soporte',
    path: '/app/support',
    iconCategory:'streamline:customer-support-1-solid'
},


]


export {
    PRIMARY_COLOR,
    SECONDARY_COLOR,
    TERTIARY_COLOR,
    WHITE,
    routes
}