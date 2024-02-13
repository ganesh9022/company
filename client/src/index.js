import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ClerkProvider } from '@clerk/clerk-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
const ACCESS_KEY = process.env.REACT_APP_CLERK_ACCESS_KEY;
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={ACCESS_KEY}>
      <Theme>
        <App/>
      </Theme>
    </ClerkProvider>
  </React.StrictMode>
);
