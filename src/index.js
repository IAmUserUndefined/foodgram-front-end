import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from "./styles/global";

import { ModalProvider } from "./providers/ModalProvider";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);