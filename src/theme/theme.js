import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
        third: {
            main: '#9933ff',
        },
        background: {
            default: '#f5f5f5',
        },
        // text: {
        //     primary: '#333333',
        //     secondary: '#666666',
        // },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: {
            fontSize: '18pt',
            fontWeight: 700,
        },
        h2: {
            fontSize: '10pt',
            fontWeight: 700,
        },
    },
});

export default theme;
