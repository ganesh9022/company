import React from 'react'
import { Flex,Box } from '@radix-ui/themes'
import './Style.css'
import Tabbar1 from './Tabbar1'
import Navbar from './Navbar'

const Payslip = () => {
  return (
    <Flex>
    <div className="w-1/6  ">
<Navbar/>
    </div>

    <div className="w-5/6 " >      <Box>
  <Tabbar1/>
</Box>



    </div>
  </Flex>
  )
}

export default Payslip
