import React from "react";
import LeavesBalanceCard from "./LeavesBalanceCart";
import UpcommingHolidaysCart from "./UpcommingHolidaysCart";
import Timeshhet from "./Timeshhet";
import Onleaves from "./Onleaves";

const Dashboard = () => {
  return (
    <div class="sm:container sm:mx-auto flex pl-[262px]">
      <div class="flex">
        <div class="flex-auto w-[865px] ">
          <Timeshhet />
          <Onleaves />
        </div>
        <div class="flex-auto w-32 ...">
          <LeavesBalanceCard />
          <UpcommingHolidaysCart />
        </div>
      </div>{" "}
    </div>
  );
};

export default Dashboard;
