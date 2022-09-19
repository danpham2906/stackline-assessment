import { createTheme, colors } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: 'PlusJakartaSans-ExtraBold, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
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
      grey: colors.blueGrey[900],
    },
  },
});