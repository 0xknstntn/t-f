import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const manifestUrl = "https://gist.githubusercontent.com/0xknstntn/7cf252c3ab5ad4a8a4394d635cb99444/raw/c00e6c66c69ae46dc3b303e039ea0c093d000851/manifest.json"
root.render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <App />
  </TonConnectUIProvider>
);
