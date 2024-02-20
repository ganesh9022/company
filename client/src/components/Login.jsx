import React from "react";
import { SignIn } from "@clerk/clerk-react";
import "./Style.css";
const Login = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "70px",
        }}
      >
        <SignIn afterSignInUrl={"/dashboard"} />
      </div>
    </div>
  );
};
export default Login;
