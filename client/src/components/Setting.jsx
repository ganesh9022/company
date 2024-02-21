import { Flex, Box } from "@radix-ui/themes";
import "./Style.css";
import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
const Setting = () => {
  return (
    <Flex>
      <Flex className="w-1/6">
        <Navbar/>
      </Flex>
      <Flex className="w-5/6 ">
        <Box>
          <Searchbar />
        </Box>
      </Flex>
    </Flex>
  );
};
export default Setting;
