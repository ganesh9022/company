import React from "react";
import { Grid, Flex, Text, Inset } from "@radix-ui/themes";
import "./Style.css";
import { Link } from "react-router-dom";
import { BsStack } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
const Navbar = () => {
  return (
    <div>
      <div>
        <Grid
          align="center"
          wrap="nowrap"
          columns="1"
          gap="2"
          className="Navbar"
        >
          <Inset
            clip="padding-box"
            side="top"
            pb="current"
            mt="4"
            ml="4"
            className="flex"
          >
            <BsStack color="limegreen" className="mt-4 text-xl" />
            <Text
              size="6"
              weight="bold"
              style={{ color: "limegreen", margin: 10 }}
            >
              AVKASH
            </Text>
          </Inset>
          <Grid
            align="center"
            wrap="nowrap"
            columns="1"
            style={{ maxWidth: 300, margin: 0, height: 670 }}
          >
            <Grid align="center" columns="1" ml="6" wrap="nowrap" gap="6">
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

            <Grid gap="6" ml="6">
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

              <Link to="/profile">
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

            <Grid align="center" gap="6" ml="6">
              <Link to="/helpsupport">
                <Flex
                  direction="row"
                  className="hovers"
                  alignItems="center"
                  wrap="nowrap"
                >
                  <Text size="4" weight="bold">
                    <span>Help & Support</span>
                  </Text>
                  <Inset ml="1">
                    <GoDotFill className="dot" />
                  </Inset>
                </Flex>
              </Link>
            </Grid>

            <Grid align="center" columns="1" gap="8" p="8">
              <Link to="#">
                <Flex direction="column">
                  <Text size="4" weight="bold"></Text>
                </Flex>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Navbar;
