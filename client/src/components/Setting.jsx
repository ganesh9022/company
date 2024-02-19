import { Flex, Box } from "@radix-ui/themes";
import "./Style.css";
import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
const Setting = () => {
  return (
    <Flex>
      <div className="w-1/6 fixwidth ">
        <Navbar/>
      </div>
      <div className="w-5/6 ">
        <Box>
          <Searchbar/>
        </Box>
      </div>
    </Flex>
  );
};
export default Setting;
