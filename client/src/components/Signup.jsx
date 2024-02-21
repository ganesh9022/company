import React from "react";
import { SignUp } from "@clerk/clerk-react";
import "./Style.css";
import {Flex} from "@radix-ui/themes"
const Signup = () => {
  return (
    <Flex>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <SignUp afterSignUpUrl={"/dashboard"} />
      </div>
    </Flex>
  );
};
export default Signup;
