import React from "react";
import Navbar from "./Navbar";
import {Flex} from '@radix-ui/themes'
import Tabbar1 from "./Tabbar1";
import {Box} from '@radix-ui/themes'
const Applyleaves = () => {
  return (
    <>
   <Flex>
    <div className="w-1/6  ">
<Navbar/>
    </div>

    <div className="w-5/6 ">
      <Box>
  <Tabbar1/>
</Box>
  
  


    </div>
  </Flex>
    </>
  );
};

export default Applyleaves;
