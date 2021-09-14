import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './components/theme';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
