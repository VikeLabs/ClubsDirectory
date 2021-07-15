import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';

import './Assets/CSS/index.css';
import App from './App';

const uvssTheme = extendTheme({
  colors: {
    brand: {
      primary: '#1b8091',
      secondary: '#044259',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={uvssTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
