import React from "react";
import Navbar from "./Navbar";
import { Flex, Box } from "@radix-ui/themes";
import "./Style.css";
import Searchbar from "./Searchbar";
const Notification = () => {
  return (
    <div>
      <Flex className="w-1/6">
        <Navbar />
      </Flex>
      <Flex className="w-5/6 ">
        <Box>
          <Searchbar />
        </Box>
      </Flex>
    </div>
  );
};
export default Notification;
