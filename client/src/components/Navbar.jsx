import React from "react";
import { Grid, Flex, Text, Card, Inset } from "@radix-ui/themes";
import "./Style.css";
import { Link } from "react-router-dom";
import { BsStack } from "react-icons/bs";
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
            mt="6"
            ml="4"
            className="flex"
          >
            <BsStack color="limegreen" className="mt-3 text-xl" />
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
            style={{ maxWidth: 170, margin: 0, height: 670 }}
          >
            <Grid align="center" columns="1" ml="6" wrap="nowrap" gap="6">
              <Link to="/">
                <Flex direction="column" wrap="nowrap">
                  <Text size="4" weight="bold">
                    <h1 className="hovers"> Dashboard</h1>
                  </Text>
                </Flex>
              </Link>

              <Link to="/Applyleaves">
                <Flex direction="column" wrap="nowrap">
                  <Text size="4" weight="bold">
                    <h1 className="hovers">Apply Leave</h1>
                  </Text>
                </Flex>
              </Link>

              <Link to="/Payslip">
                <Flex direction="column" wrap="nowrap">
                  <Text size="4" weight="bold">
                    <h1 className="hovers">Payslip</h1>
                  </Text>
                </Flex>
              </Link>

              <Link to="/Setting">
                <Flex direction="column" wrap="nowrap">
                  <Text size="4" weight="bold">
                    <h1 className="hovers">Setting</h1>
                  </Text>
                </Flex>
              </Link>
            </Grid>

            <Grid align="center" columns="1" gap="6" ml="6">
              <Link to="/Notification">
                <Flex direction="column" wrap="nowrap">
                  <Text size="4" weight="bold">
                    <h1 className="hovers">Notification</h1>
                  </Text>
                </Flex>
              </Link>

              <Link to="/Profile">
                <Flex direction="column" wrap="nowrap">
                  <Text size="4" weight="bold">
                    <h1 className="hovers">My Profile</h1>
                  </Text>
                </Flex>
              </Link>

              <Link to="/Logout">
                <Flex direction="column" wrap="nowrap">
                  <Text size="4" weight="bold">
                    <h1 className="hovers">Logout</h1>
                  </Text>
                </Flex>
              </Link>
            </Grid>

            <Grid align="center" columns="1" gap="6" ml="6">
              <Link to="/Helpsupport">
                <Flex direction="column" wrap="nowrap">
                  <Text size="4" weight="bold">
                    <h1 className="hovers">Help & Support</h1>
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
  );
};

export default Navbar;
