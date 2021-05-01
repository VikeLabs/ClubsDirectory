import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

export interface BaseTheme {
  fontSizes: { xs: string; s: string; m: string; l: string; xl: string };
  colors: {
    darkBlue: [string];
    lightBlue: [string];
    background: [string];
    white: [string];
    black: [string];
    text: [string];
  };
}

const baseTheme: BaseTheme = {
  fontSizes: {
    xs: '0.8rem',
    s: '1rem',
    m: '1.2rem',
    l: '1.4rem',
    xl: '1.8rem',
  },
  colors: {
    darkBlue: ['#1B8091'],
    lightBlue: ['#74B7C1'],
    background: ['#E5E5E5'],
    white: ['#FFFFFF'],
    black: ['#000000'],
    text: ['#000000'],
  },
};

export interface ButtonVariants {
  buttons: {
    clubCategoriesButton: {
      color: string;
      backgroundColor: string;
      '&:hover': {
        backgroundColor: string;
      };
    };
    clubListButton: {
      color: string;
      backgroundColor: string;
      '&:hover': {
        backgroundColor: string;
      };
    };
    tagButton: {
      color: string;
      backgroundColor: string;
      '&:hover': {
        backgroundColor: string;
      };
    };
    sideBarButton: {
      color: string;
      backgroundColor: string;
      '&:hover': {
        backgroundColor: string;
      };
    };
  };
}

const buttonVariants: ButtonVariants = {
  buttons: {
    clubCategoriesButton: {
      color: baseTheme.colors.text[0],
      backgroundColor: baseTheme.colors.background[0],
      '&:hover': {
        backgroundColor: baseTheme.colors.lightBlue[0],
      },
    },
    clubListButton: {
      color: baseTheme.colors.text[0],
      backgroundColor: baseTheme.colors.background[0],
      '&:hover': {
        backgroundColor: baseTheme.colors.lightBlue[0],
      },
    },
    tagButton: {
      color: baseTheme.colors.text[0],
      backgroundColor: baseTheme.colors.lightBlue[0],
      '&:hover': {
        backgroundColor: baseTheme.colors.white[0],
      },
    },
    sideBarButton: {
      color: baseTheme.colors.text[0],
      backgroundColor: baseTheme.colors.background[0],
      '&:hover': {
        backgroundColor: baseTheme.colors.lightBlue[0],
      },
    },
  },
};

const theme: DefaultTheme = {
  ...baseTheme,
  ...buttonVariants,
};

const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
