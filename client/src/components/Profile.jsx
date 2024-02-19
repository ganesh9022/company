import React from "react";
import Navbar from "./Navbar";
import { Flex } from "@radix-ui/themes";
import "./Style.css";
import Searchbar from "./Searchbar";
const Profile = () => {
  return (
    <Flex>
      <div className="w-1/6 fixwidth">
        <Navbar />
      </div>
      <div className="w-5/6 ">
        <div>
          <Searchbar />
        </div>
      </div>
    </Flex>
  );
};

export default Profile;
