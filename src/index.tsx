import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { AuthProvider } from "./providers/AuthProvider";
import { ModalProvider } from "./providers/ModalProvider";

import GlobalStyle from "./styles/global"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <AuthProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);