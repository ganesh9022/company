import React from "react";
import Navbar from "./Navbar";
import { Flex, Box, Dialog } from '@radix-ui/themes';
import Tabbar from "./Tabbar";
import Searchbar from "./Searchbar";
import { UserButton, UserProfile } from "@clerk/clerk-react";
const Dashboard = () => {
  return (
    <Flex>
      <div className="w-1/6  ">
        <Navbar />
      </div>
      <div className="w-5/6 mr-8">
        <Box>
          <Tabbar/>
          <Searchbar />
        </Box>
        
      </div>
      <div className="ml-2 mr-5 mt-7">
        <Dialog.Root>
          <Dialog.Trigger>
            <UserButton style={{ width: '60px', height: '60px' }}/>
          </Dialog.Trigger>
          <Dialog.Content className="wide-content" style={{ width: '600px' }}>
            <UserProfile />
          </Dialog.Content>
        </Dialog.Root>
      </div>
    </Flex>
  );
};
export default Dashboard;
