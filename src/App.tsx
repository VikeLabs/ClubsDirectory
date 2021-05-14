import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

import ClubInfoPage from './ClubInfo/ClubInfoPage';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <ClubInfoPage />
    </ChakraProvider>
  );
}

export default App;
