import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '420px',
  md: '768px',
  lg: '960px',
  xl: '1130px',
});

export const uvssTheme = extendTheme({
  colors: {
    brand: {
      primary: '#1b8091',
      secondary: '#044259',
      light: '#ddf0f1',
    },
  },
  breakpoints,
});
