import {React} from "react";
import { Grid, Flex, Text, Inset, Box } from "@radix-ui/themes";
import "./Style.css";
import { Link, useLocation } from "react-router-dom";
import { BsStack } from "react-icons/bs";
const Navbar = () => {
  const location = useLocation();
  return (
    <div className="navbar-wrapper">
      <Grid align="center" wrap="nowrap" columns="1" gap="1" className="Navbar">
        <Link to="/dashboard">
          <Inset
            clip="padding-box"
            side="top"
            pb="current"
            mt="4"
            ml="5"
            className="flex"
          >
            <BsStack color="limegreen" className="mt-4 text-xl" />
            <Text size="6" weight="bold" m="3" className="avkash">
              AVKASH
            </Text>
          </Inset>
        </Link>
        <Grid align="center" wrap="wrap" columns="1">
          <Grid
            align="center"
            columns="1"
            ml="4"
            wrap="nowrap"
            mt="2"
            gap="4"
            p="2"
          >
            <Flex>
              <Inset>
                <NavLink
                  to="/dashboard"
                  currentPath={location.pathname}
                  page="dashboard"
                >
                  <Text> Dashboard </Text>
                </NavLink>
              </Inset>
            </Flex>
            <Flex>
              <NavLink
                to="/applyleave"
                currentPath={location.pathname}
                page="applyleave"
              >
                <Text> Apply Leave </Text>
              </NavLink>
            </Flex>
            <Flex>
              <NavLink
                to="/payslip"
                currentPath={location.pathname}
                page="payslip"
              >
                <Text> Payslip </Text>
              </NavLink>
            </Flex>
            <Flex>
              <NavLink
                to="/setting"
                currentPath={location.pathname}
                page="setting"
              >
                <Text> Setting </Text>
              </NavLink>
            </Flex>
            <Flex>
              <Inset mt="5">
                <NavLink
                  to="/notification"
                  currentPath={location.pathname}
                  page="notification"
                >
                  <Text> Notification </Text>
                </NavLink>
              </Inset>
            </Flex>

            <Flex>
              <Inset>
                <NavLink
                  to="/helpsupport"
                  currentPath={location.pathname}
                  page="helpsupport"
                >
                  <Text> Help & Support </Text>
                </NavLink>
              </Inset>
            </Flex>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const NavLink = ({ to, children, currentPath }) => {
  const isActive = currentPath === to;
  return (
    <Link to={to}>
      <Flex wrap="nowrap">
        <Box className={`nav-link-box ${isActive ? "active" : ""}`}>
          <Text
            size={isActive ? "5" : "4"}
            weight="bold"
            style={{ color: isActive ? "limegreen" : "black" }}
          >
            {children}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default Navbar;
