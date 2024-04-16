'use client'
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        mode: 'dark',  // Habilita el modo oscuro
        // Otros colores personalizados para modo oscuro si es necesario
    },
});

interface MuiThemeProviderInterface {
    children: React.ReactNode
}

export const MuiThemeProvider = ({ children }: MuiThemeProviderInterface) => {
    console.log('theme :>> ', theme);
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
}
