import React from "react";
import { Grid, Box, Text } from "@radix-ui/themes";
import "./Style.css";
const Tabbar = (props) => {

  return (
    <div>
      <Grid row="auto" gap="3" width="auto">
        <Box height="8" className="welcome flex items-center">
          <Text
            size="6"
            weight="bold"
            mt="6"
            ml="5"
            className="md:inline  hidden "
          >
           <p> {props.name}</p>
          </Text>
        </Box>
      </Grid>
    </div>
  );
};
export default Tabbar;
