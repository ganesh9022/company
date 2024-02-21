import React from "react";
import Navbar from "./Navbar";
import { Flex, Box } from "@radix-ui/themes";
import Searchbar from "./Searchbar";
const Helpsupport = () => {
  return (
    <div>
      <Flex className="w-1/6">
        <Box>
          <Navbar />
        </Box>
      </Flex>
      <Flex className="w-5/6 ">
        <Box>
          <Searchbar />
        </Box>
      </Flex>
    </div>
  );
};
export default Helpsupport;
