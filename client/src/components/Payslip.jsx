import React from "react";
import { Flex, Box } from "@radix-ui/themes";
import "./Style.css";
import Searchbar from "./Searchbar";
import Navbar from "./Navbar";
const Payslip = () => {
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
export default Payslip;
