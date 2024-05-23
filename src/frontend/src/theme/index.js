import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import breakpoints from './breakpoints';
import palette from './palette';
import typography from './typography';

let theme = createTheme({
  primary: {
    main: '#f9f9f9',
    contrastText: '#fff',
  },
  secondary: {
    main: '#D14081',
    contrastText: '#fff',
  },
  background: {
    main: '#f9f9f9',
    default: '#f9f9f9',
    innerContainer: '#ffffff',
  },
  palette,
  typography,
  breakpoints,
});

theme = responsiveFontSizes(theme);

export default theme;
