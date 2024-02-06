import React from 'react'
import img from './assets/img1.jpg'
import { Grid, Flex, Text, Card } from '@radix-ui/themes';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
    <div>
      {/* <Card> */}
      <Grid align="center" wrap='nowrap' columns="1" style={{ }}>

        <Flex direction="column" wrap='nowrap' pl="5" gap='8' style={{ top:10}}>
        {/* <Link to='/Dashboard' class="flex items-center ps-2.5 mb-5 pt-3 ml-1"> */}
         {/* <img  src={img} class="h-6 me-3 sm:h-7" alt="Avkash  Logo" /> */}
         {/* <span class="self-center  text-2xl font-semibold whitespace-nowrap text-green-500">Avkash </span> */}
         <Text size="7" weight="bold">
                <h1>Avkash</h1>
              </Text>
      {/* </Link> */}
        </Flex>
              <Grid align="center" wrap='nowrap' columns="1" style={{ maxWidth: 170, margin: 10 ,height:660}}>

        <Grid align="center" columns="1" wrap='nowrap' gap="5" p="3">
          <Link to="/">
            <Flex direction="column">
              <Text size="4" weight="bold">
                <h1>Dashboard</h1>
              </Text>
            </Flex>
          </Link>

          <Link to="/Applyleaves">
            <Flex direction="column">
              <Text size="4" weight="bold">
                <h1>Apply Leave</h1>
              </Text>
            </Flex>
          </Link>

          <Link to="/Payslip">
            <Flex direction="column">
              <Text size="4" weight="bold">
                <h1>Payslip</h1>
              </Text>
            </Flex>
          </Link>

          <Link to="/Setting">
            <Flex direction="column">
              <Text size="4" weight="bold">
                <h1>Setting</h1>
              </Text>
            </Flex>
          </Link>
        </Grid>

        <Grid align="center" columns="1" gap="6" p="3">
          <Link to="/Notification">
            <Flex direction="column">
              <Text size="4" weight="bold">
                <h1>Notification</h1>
              </Text>
            </Flex>
          </Link>

          <Link to="/Profile">
            <Flex direction="column">
              <Text size="4" weight="bold">
                <h1>My Profile</h1>
              </Text>
            </Flex>
          </Link>

          <Link to="/Logout">
            <Flex direction="column">
              <Text size="4" weight="bold">
                <h1>Logout</h1>
              </Text>
            </Flex>
          </Link>
        </Grid>

        <Grid align="center" columns="1" gap="6" p="3">
          <Link to="/Helpsupport">
            <Flex direction="column">
              <Text size="4" weight="bold">
                <h1>Help & Support</h1>
              </Text>
            </Flex>
          </Link>
        </Grid>

        <Grid align="center" columns="1" gap="8" p="8">
          <Link to="/Helpsupport">
            <Flex direction="column">
              <Text size="4" weight="bold">
                <h1></h1>
              </Text>
            </Flex>
          </Link>
        </Grid>
      </Grid>
      </Grid>
      {/* </Card> */}
    </div>



    </div>
  )
}

export default Navbar
