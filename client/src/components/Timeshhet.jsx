import React from "react";
import { GoDotFill } from "react-icons/go";
import { FaCaretDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Timesheet() {
  return (
    <div className="flex justify-center  mt-[-30px] ">
      <div className="max-w-3xl rounded-overflow-hidden w-[900px] border border-slate-300 rounded-3xl   mx-auto lg:my-8 pl-6">
        <div className="px-7 h-[320px]  pt-4  pr-[20px]">
          {" "}
          {/* Reduced padding */}
          <div className="font-bold text-2xl mb-4 ">
            Time Sheet
            <span className="inline-block text-base font-semibold text-gray-700 mr-2 ml-16 mb-2 px-4 pt-4 pb-2 FaCircle">
              This Week
            </span>
            <span className="inline-block ml-5 text-base font-semibold text-gray-700 mr-2 mb-2 px-4 pt-4 pb-2 FaCircle">
              Last Week
            </span>
            <span className="inline-block ml-8 text-base font-semibold text-gray-700 mr-2 mb-2 px-4 pt-4 pb-2">
              <span>
                <div class="flex">
                  <button
                    id="states-button"
                    data-dropdown-toggle="dropdown-states"
                    class="flex-shrink-0  inline-flex items-center text-mb  "
                    type="button"
                  >
                    Sort by
                  </button>

                  
                </div>
              </span>

              {/*  */}
            </span>
          </div>
          <div className="font-bold text-lg mb-2 lg:mb-4">
            {" "}
            {/* Reduced margin */}
            Thursday 25th January 11:23 AM
          </div>
          <div className="font-bold text-lg mb-2 lg:mb-4">
            {" "}
            {/* Reduced margin */}
            In Time - 9:28 AM
          </div>
          <div className="font-bold text-lg mb-2 lg:mb-4">
            {" "}
            {/* Reduced margin */}
            Average Working Hours - 9:33 Hours
          </div>
          <div className="font-bold text-lg  lg:mb-1">
            {" "}
            {/* Reduced margin */}
            Break Time - 7:07 min
          </div>
          <div className=" pt-4">
            {" "}
            {/* Adjusted padding */}
            <span className="py-2 text-lg font-bold ">Check Out</span>
            <span className="px-12 py-2 text-lg font-bold mr-4  ml-5">
              End Break
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
