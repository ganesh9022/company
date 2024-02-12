import React from "react";
import { Grid, Flex, Text, Inset ,Box} from "@radix-ui/themes";
import "./Style.css";
import { Link, redirect } from "react-router-dom";
import { BsStack } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { useClerk } from "@clerk/clerk-react";
import { SignOutButton, SignedOut, SignIn } from "@clerk/clerk-react";
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
                  <AlertDialog.Root>
                    <AlertDialog.Trigger asChild>
                      <div>
                        <Flex
                          direction="row"
                          className="hovers"
                          alignItems="center"
                          wrap="nowrap"
                        >
                          <Text size="4" weight="bold">
                            <span>Logout</span>
                          </Text>
                        </Flex>
                      </div>
                    </AlertDialog.Trigger>
                    <AlertDialog.Portal>
                      <AlertDialog.Overlay className="AlertDialogOverlay" />
                      <AlertDialog.Content className="AlertDialogContent">
                        <Flex direction="row">
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 15 15"
                            className="ml-0 mt-2"
                            fill="none"
                            color="red"

                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z"
                              fill="currentColor"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <Inset >
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

                        <div
                          style={{
                            display: "flex",
                            gap: 25,
                            justifyContent: "flex-end",
                          }}
                        >
                          <AlertDialog.Cancel asChild>
                            <button className="Button mauve mt-3">Cancel</button>
                          </AlertDialog.Cancel>
                          <AlertDialog.Action asChild>
                            
                            {/* <button className="Button red mt-3">Logout</button> */}
                            <SignOutButton className="Button red mt-3" signOutCallback={()=> redirect('/')}/>
                          </AlertDialog.Action>
                        </div>
                      </AlertDialog.Content>
                    </AlertDialog.Portal>
                  </AlertDialog.Root>
                </Text>
                <Inset ml="8" pl="6">
                  <GoDotFill className="dot "/>
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
            <Grid columns="1" mt="9" p="1"></Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Navbar;
