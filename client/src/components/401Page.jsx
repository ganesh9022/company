import React from "react";
import { Flex, Grid, Text } from "@radix-ui/themes";
import RobotImage from "./robot.gif";
import { BsStack } from "react-icons/bs";
import "./Style.css";
const PageNotFound = () => {
    return (
        <Grid columns="1fr 1fr" gap={20} style={{ position: "absolute", top: "150px", left: "300px" }}>
            <div>
                <BsStack color="limegreen" className="mt-2 text-xl" style={{ position: "absolute", top: "0px", marginLeft: "25px" }} />
                <Text size="8" weight="bold" m="5" className="avkash" style={{ marginLeft: "55px" }}>
                    AVKASH
                </Text>
                <Flex style={{ position: "relative", left: "24px", marginTop: "20px" }}>
                    <Text size="5" style={{ fontFamily: "Fredoka One, cursive" }}>
                        <span style={{ fontWeight: "bold" }}>Error 401. </span>
                        <span style={{ color: "gray" }}>Unauthorized.</span><br />
                        <br />
                        <span>Authentication credentials were missing or incorrect.</span><br />
                        <span style={{ color: "gray" }}> Please try again.</span>
                    </Text>
                </Flex>
            </div>
            <Flex style={{ marginLeft: "30px" }}>
                <img src={RobotImage} alt="401 Error" />
            </Flex>
        </Grid>
    );
};
export default PageNotFound;
