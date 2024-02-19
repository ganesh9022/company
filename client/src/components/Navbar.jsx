import React, { useState, useEffect } from "react";
import { Grid, Flex, Text, Inset } from "@radix-ui/themes";
import "./Style.css";
import { BsStack } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMenuVisible(false);
        setIsButtonVisible(true);
      } else {
        setIsMenuVisible(true);
        setIsButtonVisible(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <Grid
      align="center"
      wrap="nowrap"
      columns="1"
      gap="1"
      className="Navbar"
      style={{ display: isMenuVisible ? "grid" : "none" }}
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
        <Text size="6" weight="bold" m="3" className="avkash">
          AVKASH
        </Text>
      </Inset>
      <Grid align="center" wrap="wrap" columns="1">
        <Grid
          align="center"
          columns="1"
          ml="6"
          wrap="nowrap"
          mt="3"
          gap="5"
          p="2"
        >
          <NavLink
            to="/dashboard"
            currentPath={location.pathname}
            page="dashboard"
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/applyleave"
            currentPath={location.pathname}
            page="applyleave"
          >
            Apply Leave
          </NavLink>

          <NavLink to="/payslip" currentPath={location.pathname} page="payslip">
            Payslip
          </NavLink>

          <NavLink to="/setting" currentPath={location.pathname} page="setting">
            Setting
          </NavLink>

          <Inset mt="6">
            <NavLink
              to="/notification"
              currentPath={location.pathname}
              page="notification"
            >
              Notification
            </NavLink>
          </Inset>

          <Grid mt="6" mb="9" pb="9">
            <NavLink
              to="/helpsupport"
              currentPath={location.pathname}
              page="helpsupport"
            >
              Help & Support
            </NavLink>
            <Grid mt="8" mb="5"></Grid>
          </Grid>
        </Grid>
      </Grid>
      {isButtonVisible && (
        <button onClick={toggleMenuVisibility} className="menu-toggle-btn">
          {isMenuVisible ? "Hide Menu" : "Show Menu"}
        </button>
      )}
    </Grid>
  );
};

const NavLink = ({ to, children, currentPath, page }) => {
  const isActive = currentPath === to;
  let ml = "0";
  switch (page) {
    case "dashboard":
      ml = isActive ? "62px" : "0";
      break;
    case "applyleave":
      ml = isActive ? "50px" : "0";
      break;
    case "payslip":
      ml = isActive ? "93px" : "0";
      break;
    case "setting":
      ml = isActive ? "90px" : "0";
      break;
    case "notification":
      ml = isActive ? "47px" : "0";
      break;
    case "myprofile":
      ml = isActive ? "60px" : "0";
      break;
    case "helpsupport":
      ml = isActive ? "11px" : "0";
      break;
    default:
      ml = "0";
  }
  return (
    <Link to={to}>
      <Flex className="hovers" alignItems="center" wrap="nowrap">
        <Text
          size="4"
          weight="bold"
          style={{ color: isActive ? "limegreen" : "black" }}
        >
          {children}
        </Text>
        <Inset>
          {isActive && <GoDotFill className="dot" style={{ marginLeft: ml }} />}
        </Inset>
      </Flex>
    </Link>
  );
};
export default Navbar;
