import { createTheme } from '@mui/material/styles';

export const tokens = () => ({
  primary: {
    100: '#d6f0e5',
    200: '#aee0ca',
    300: '#85d1b0',
    400: '#5dc195',
    500: '#34b27b',
    600: '#2a8e62',
    700: '#1f6b4a',
    800: '#154731',
    900: '#0a2419',
  },
  grey: {
    100: '#F8F9FA',
    200: '#EDEDED',
    300: '#BBBBBB',
    400: '#707070',
    500: '#3E3E3E',
    600: '#343434',
    700: '#2E2E2E',
    800: '#232323',
    900: '#1C1C1C',
  },
  red: {
    100: '#FADADB',
    200: '#F5B6B8',
    300: '#EF9194',
    400: '#EA6D71',
    500: '#E5484D',
    600: '#B73A3E',
    700: '#892B2E',
    800: '#5C1D1F',
    900: '#2E0E0F',
  },
});

export const themeSettings = (mode: 'light' | 'dark') => {
  const colors = tokens();

  return {
    palette: {
      mode: mode,
      primary: {
        main: colors.primary[500],
      },
      background: {
        default: colors.grey[900],
      },
      text: {
        primary: colors.grey[200],
        secondary: colors.grey[300],
      },
    },
    typography: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontSize: 12,

      h1: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        fontSize: 14,
      },
    },
  };
};

export default createTheme(themeSettings('dark'));
