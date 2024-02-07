import React from "react";
import Navbar from "./Navbar";
import { Flex,Box ,Grid,Text} from '@radix-ui/themes';
import Tabbar1 from "./Tabbar1";

const Helpsupport = () => {
  return (
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
  );
};

export default Helpsupport;
