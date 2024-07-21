import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const manifestUrl = "https://gist.githubusercontent.com/0xknstntn/1a0d7b5adda5f5ec0de2cb75d544f164/raw/af9b38e1468c5083a284e74ec28d237df68ad791/faucet-manifest.json"
root.render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <App />
  </TonConnectUIProvider>
);
