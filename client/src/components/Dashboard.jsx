import React from "react";
import Navbar from "./Navbar";
import { Flex, Box } from "@radix-ui/themes";
import Tabbar from "./Tabbar";
import Searchbar from "./Searchbar";
import { useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  return (
    <Flex>
      <Flex className="w-1/6">
        <Box>
          <Navbar />
        </Box>
      </Flex>
      <Flex className="w-5/6">
        <Flex direction="column">
          <Flex height="9">
            <Box>
              <Tabbar
                name={isSignedIn ? "Welcome, " + user.fullName + "!" : ""}
              />
            </Box>
            <Box>
              <Searchbar />
            </Box>
          </Flex>
          <Flex height="100vh "></Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Dashboard;
