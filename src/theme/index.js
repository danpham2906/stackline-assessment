import { createTheme, colors } from '@mui/material';

export const theme = createTheme({
  palette: {
    background: {
      dark: '#092849',
      default: colors.common.white,
      paper: colors.common.white,
      light: '#F4F6F8',
      grey: colors.blueGrey[50],
    },
    primary: {
      main: 'rgb(34, 43, 54)',
    },
    secondary: {
      main: colors.lightBlue[800]
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[900],
      link: colors.lightBlue[800],
      sectionTitle: colors.lightBlue[800],
    },
  },
});