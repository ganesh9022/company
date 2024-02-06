import { Flex } from '@radix-ui/themes'
import React from 'react'
import Navbar from './Navbar'

const Setting = () => {
  return (
    <Flex>
    <div className="w-1/6 bg-gray-200 p-4">
<Navbar/>
    </div>

    <div className="w-5/6 bg-gray-300 p-4">
<h1>this</h1>
    </div>
  </Flex>
  )
}

export default Setting
