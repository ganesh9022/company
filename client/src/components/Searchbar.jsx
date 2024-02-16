import React from "react";
import { Grid, Dialog } from "@radix-ui/themes";
import { MdNotifications } from "react-icons/md";
import { IoMdMic } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import Notificationmodal from "./Notificationmodal";
import "./Style.css";
import { UserButton, UserProfile } from "@clerk/clerk-react";
const Searchbar = () => {
  return (
    <div>
      <Grid row="auto" gap="3" width="auto">
        <div className="logo-sidebar fixed top-4 right-0 mr-3 flex items-center p-2 flex-wrap">
            <Notificationmodal/>

          <div className="hidden md:flex items-center bg-white border rounded-full p-2">
            <IoIosSearch size="1.2em" />
            <input
              type="text"
              placeholder="  Search here"
              className="outline-none bg-transparent"
            />
            <IoMdMic size="1.2em" />
          </div>
          <div className="ml-5">
            <Dialog.Root>
            <Dialog.Trigger>
              <UserButton />
            </Dialog.Trigger>
            <Dialog.Content className="wide-content" style={{ width: '600px' }}>
              <UserProfile />
            </Dialog.Content>
          </Dialog.Root>
          </div>

          <div className="md:hidden flex items-center">
            <MdNotifications size="1.5em" color="white" />
          </div>
          <button
            data-collapse-toggle="logo-sidebar"
            type="button"
            className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </Grid>
    </div>
  );
};
export default Searchbar;
