import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ClerkProvider } from '@clerk/clerk-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
const ACCESS_KEY = "pk_test_bmF0aW9uYWwtcG9ueS05Ny5jbGVyay5hY2NvdW50cy5kZXYk";
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={ACCESS_KEY}>
      <Theme>
        <App/>
      </Theme>
    </ClerkProvider>
  </React.StrictMode>
);
