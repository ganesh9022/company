import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import './Style.css'
const Signup = () => {
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", marginBottom: "40px"}}>
          <SignUp afterSignUpUrl={'/dashboard'} />
        </div>
      </div>
    );
  };
  export default Signup;
  