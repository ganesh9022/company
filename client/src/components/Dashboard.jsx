import React from "react";
import Navbar from "./Navbar";
import { Flex,Box,Grid} from '@radix-ui/themes';
import Tabbar from "./Tabbar";

const Dashboard = () => {
  return (
    <Flex>
    <div className="w-1/6  ">
<Navbar/>
    </div>

    <div className="w-5/6 ">
      <Box>
  <Tabbar/>
</Box>
  <Box height="auto">
  <Flex>
    <Flex className="w-4/6 " mt="5"   >

<Grid row="2" gap="3" className="w-4/6 ">
  <Box>


  </Box>
  <Box >
  </Box>
  </Grid>

    </Flex>

    <div className="w-2/6 ">
      <Box>
{/* <LeavesBalanceCart/> */}
</Box>
 
  


    </div>
  </Flex>
  </Box>
  


    </div>
  </Flex>
  );
};

export default Dashboard;
