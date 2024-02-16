import React from "react";
import { Grid, Flex, Text, Inset, Box } from "@radix-ui/themes";
import "./Style.css";
import { Link, useLocation } from "react-router-dom";
import { BsStack } from "react-icons/bs";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

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
            <Inset>
              <NavLink
                to="/dashboard"
                currentPath={location.pathname}
                page="dashboard"
              >
                <Text> Dashboard </Text>
              </NavLink>
            </Inset>

            <NavLink
              to="/applyleave"
              currentPath={location.pathname}
              page="applyleave"
            >
              <Text> Apply Leave </Text>
            </NavLink>

            <NavLink
              to="/payslip"
              currentPath={location.pathname}
              page="payslip"
            >
              <Text> Payslip </Text>
            </NavLink>

            <NavLink
              to="/setting"
              currentPath={location.pathname}
              page="setting"
            >
              <Text> Setting </Text>
            </NavLink>

            <Inset mt="5">
              <NavLink
                to="/notification"
                currentPath={location.pathname}
                page="notification"
              >
                <Text> Notification </Text>
              </NavLink>
            </Inset>

            <NavLink
              to="/myprofile"
              currentPath={location.pathname}
              page="myprofile"
            >
              <Text> My Profile </Text>
            </NavLink>

            <Link>
              <Flex alignItems="center" wrap="nowrap" className="logoutbutton">
                <Text size="4" weight="bold">
                  <AlertDialog.Root>
                    <AlertDialog.Trigger asChild>
                      <Flex>
                        <Text size="4" weight="bold">
                          Logout
                        </Text>
                      </Flex>
                    </AlertDialog.Trigger>
                    <AlertDialog.Portal>
                      <AlertDialog.Overlay className="AlertDialogOverlay" />
                      <AlertDialog.Content className="AlertDialogContent">
                        <Flex direction="row">
                          <svg
                            color="red"
                            width="30"
                            height="30"
                            viewBox="0 0 15 15"
                            className="ml-0 mt-2"
                            fill="none"
                          >
                            <path
                              d="M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z"
                              fill="currentColor"
                              fillRule="evenodd"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <Inset>
                            <AlertDialog.Title className="AlertDialogTitle  ">
                              <Box className="ml-3">
                                <Text as="div" size="4" weight="bold">
                                  Logging out
                                </Text>
                                <Text as="div" size="2" color="gray">
                                  Are you sure you want to log out ?
                                </Text>
                              </Box>
                            </AlertDialog.Title>
                          </Inset>
                        </Flex>
                        <Flex style={{ gap: 25, justifyContent: "flex-end" }}>
                          <AlertDialog.Cancel asChild>
                            <button className="Button mauve mt-3">
                              Cancel
                            </button>
                          </AlertDialog.Cancel>
                          <AlertDialog.Action asChild>
                            <button className="Button red mt-3">Logout</button>
                          </AlertDialog.Action>
                        </Flex>
                      </AlertDialog.Content>
                    </AlertDialog.Portal>
                  </AlertDialog.Root>
                </Text>
              </Flex>
            </Link>
            <Inset mt="5" mb="9" pb="9">
              <NavLink
                to="/helpsupport"
                currentPath={location.pathname}
                page="helpsupport"
              >
                <Text> Help & Support </Text>
              </NavLink>
            </Inset>
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
