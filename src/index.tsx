import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ModalProvider } from "./providers/ModalProvider";
import { AuthProvider } from "./providers/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);