import React from 'react'
import {Flex,Card,Avatar,Box,Text,Inset,Strong} from '@radix-ui/themes'
import img from "./assets/book.png"
// import { radixColorScales } from '@radix-ui/themes'
const Timesheet = () => {
  return (
    <div>
<Flex  direction="Column" className='Timeshhet'>
  <Card size="1" ml="5"style={{ width: 750,padding:9 }}>
  <Flex direction="column" gap="3" ml='5'>
  <Flex gap="8" mb='2'>
  <Text size="6"  weight="bold">Time Sheet</Text>
  <Text size="3"    ml="6"  >This Week</Text>
  <Text size="3"   ml="6"  >Last Week</Text>
  <Text size="3"    ml="6"  >Sort by</Text>

  </Flex>
 
  <Text size="3" mb="2" weight="bold">Thursday 25th January 11:23 AM</Text>
  <Text size="3"  mb="2" weight="bold">In Time - 9:28 AM</Text>
  <Text size="3"   mb="2" weight="bold">Average Working Hours -9:33 Hours</Text>
  <Text size="3"  mb="2"  weight="bold">Break Time - 7:07 min</Text>
  <Flex gap="8">
  <Text size="3"  mb="2" weight="bold">Check out</Text>
  <Text size="3"  mb="2" weight="bold">End break</Text>
  </Flex>
 
</Flex>
</Card>

{/* as="p" mb="5 */}






</Flex>    </div>
  )
}

export default Timesheet
