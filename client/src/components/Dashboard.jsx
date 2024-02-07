import React from "react";
import LeavesBalanceCard from "./LeavesBalanceCart";
import UpcommingHolidaysCart from "./UpcommingHolidaysCart";
import Timeshhet from "./Timeshhet";
// import Onleaves from "./Onleaves";
import Navbar from "./Navbar";
import { Flex,Box ,Grid,Text} from '@radix-ui/themes';
import Tabbar from "./Tabbar";
import Onleaves from "./Onleaves"
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
    <div className="w-4/6  ">
<Timeshhet/>
<Onleaves/>
    </div>

    <div className="w-2/6 ">
      <Box>
      {/* <LeavesBalanceCard/>
      <UpcommingHolidaysCart/> */}
</Box>
 
  


    </div>
  </Flex>
  </Box>
  


    </div>
  </Flex>
  );
};

export default Dashboard;
