import React from "react";
import Navbar from "./Navbar";
import { Flex, Box } from "@radix-ui/themes";
import Searchbar from "./Searchbar";
const Applyleave = () => {
  return (
    <Flex>
      <Flex className="w-1/6">
        <Navbar />
      </Flex>
      <Flex className="w-5/6 ">
        <Box>
          <Searchbar />
        </Box>
      </Flex>
    </Flex>
  );
};
export default Applyleave;
