import React from "react";
import Navbar from "./Navbar";
import { Flex, Box } from "@radix-ui/themes";
import "./Style.css";
import Searchbar from "./Searchbar";
const Notification = () => {
  return (
    <Flex>
      <div className="w-1/6  fixwidth">
        <Navbar />
      </div>
      <div className="w-5/6 ">
        <Box>
          <Searchbar />
        </Box>
      </div>
    </Flex>
  );
};
export default Notification;
