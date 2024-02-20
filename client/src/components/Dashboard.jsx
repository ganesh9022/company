import React from "react";
import Navbar from "./Navbar";
import { Flex, Box } from '@radix-ui/themes';
import Tabbar from "./Tabbar";
import Searchbar from "./Searchbar";
const Dashboard = () => {
  return (
    <Flex>
      <div className="w-1/6">
        <Navbar />
      </div>
      <div className="w-5/6 mr-8">
        <Box>
          <Tabbar/>
          <Searchbar />
        </Box>
        
      </div>
    </Flex>
  );
};
export default Dashboard;
