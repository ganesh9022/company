import React from 'react';
import { SignIn } from '@clerk/clerk-react';
const Login = () => {
  return (
    <div>
      <style>
        {`
          body {
            background-color: #7CFC00;
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
      <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", marginTop: "70px"}}>
        <SignIn afterSignInUrl={'/dashboard'} />
      </div>
    </div>
  );
};
export default Login;
