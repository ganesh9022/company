import { Flex,Box } from '@radix-ui/themes'
import './Style.css'
import React from 'react'
import Navbar from './Navbar'
import Tabbar1 from './Tabbar1'
const Setting = () => {
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
  )
}

export default Setting
