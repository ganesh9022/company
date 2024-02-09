import React from "react";
import { Grid, Flex, Text, Inset } from "@radix-ui/themes";
import "./Style.css";
import { Link } from "react-router-dom";
import { BsStack } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
const Navbar = () => {
  return (
    <div>
      <Grid align="center" wrap="nowrap" columns="1" gap="1" className="Navbar">
        <Inset
          clip="padding-box"
          side="top"
          pb="current"
          mt="5"
          ml="4"
          className="flex"
        >
          <BsStack color="limegreen" className="mt-4 text-xl" />
          <Text size="6" weight="bold" m="3" style={{ color: "limegreen" }}>
            AVKASH
          </Text>
        </Inset>
        <Grid align="center" wrap="wrap" columns="1">
          <Grid align="center" columns="1" ml="6" wrap="nowrap" mt="5" gap="6">
            <Link to="/dashboard">
              <Flex className="hovers" wrap="nowrap">
                <Text size="4" weight="bold">
                  <span>Dashboard</span>
                </Text>
                <Inset ml="8">
                  <GoDotFill className="dot " />
                </Inset>
              </Flex>
            </Link>

            <Link to="/applyleave">
              <Flex className="hovers" wrap="nowrap">
                <Text size="4" weight="bold">
                  <span>Apply Leave</span>
                </Text>
                <Inset ml="6" pl="1">
                  <GoDotFill className="dot" />
                </Inset>
              </Flex>
            </Link>

            <Link to="/payslip">
              <Flex className="hovers" wrap="nowrap">
                <Text size="4" weight="bold">
                  <span>Payslip</span>
                </Text>
                <Inset ml="7" pl="7">
                  <GoDotFill className="dot" />{" "}
                </Inset>
              </Flex>
            </Link>

            <Link to="/setting">
              <Flex className="hovers" wrap="nowrap">
                <Text size="4" weight="bold">
                  <span>Setting</span>
                </Text>
                <Inset ml="9" pl="4">
                  <GoDotFill className="dot" />
                </Inset>
              </Flex>
            </Link>
          </Grid>

          <Grid gap="6" ml="6" mt="9">
            <Link to="/notification">
              <Flex
                direction="row"
                className="hovers"
                alignItems="center"
                wrap="nowrap"
              >
                <Text size="4" weight="bold">
                  <span>Notification</span>
                </Text>
                <Inset ml="7">
                  <GoDotFill className="dot" />
                </Inset>
              </Flex>
            </Link>

            <Link to="/myprofile">
              <Flex className="hovers" alignItems="center" wrap="nowrap">
                <Text size="4" weight="bold">
                  <span>My Profile </span>
                </Text>
                <Inset ml="8" pl="1">
                  <GoDotFill className="dot" />
                </Inset>
              </Flex>
            </Link>

            <Link to="#">
              <Flex className="hovers" alignItems="center" wrap="nowrap">
                <Text size="4" weight="bold">
                  <span>Logout</span>
                </Text>
                <Inset ml="8" pl="6">
                  <GoDotFill className="dot " />
                </Inset>
              </Flex>
            </Link>
          </Grid>

          <Grid align="center" gap="6" ml="6" mt="9">
            <Link to="/helpsupport">
              <Flex
                direction="row"
                className="hovers"
                alignItems="center"
                wrap="nowrap"
              >
                <Text size="4" weight="bold" mb="9">
                  <span>Help & Support</span>
                </Text>
                <Inset ml="1">
                  <GoDotFill className="dot" />
                </Inset>
              </Flex>
            </Link>
            <Grid columns="1" mt="9" p="2"></Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Navbar;
