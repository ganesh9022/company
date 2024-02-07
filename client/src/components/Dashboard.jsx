import React from "react";
import Navbar from "./Navbar";
import { Flex,Box} from '@radix-ui/themes';
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
    <div className="w-4/6  " >

    </div>

    <div className="w-2/6 ">
      <Box>

</Box>
 
  


    </div>
  </Flex>
  </Box>
  


    </div>
  </Flex>
  );
};

export default Dashboard;
