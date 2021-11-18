import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';

import './Assets/CSS/index.css';
import App from './App';
import { uvssTheme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={uvssTheme} resetCSS>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
