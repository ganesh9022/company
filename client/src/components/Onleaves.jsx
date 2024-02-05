import React from 'react';
import img from "./assets/img.jpg";
import img1 from "./assets/img1.jpg";
import imgs from "./assets/th.jpeg";

const Onleaves = () => {
  return (
    <div>
      <div className="flex border border-slate-300 h-[290px]  w-[760px] rounded-2xl mx-auto relative">
        <h1 className="text-2xl font-bold absolute top-0 left-0 ml-12 mt-5">On Leave</h1>
        <h1 className="text-[17px]  text-green-500 absolute top-2 right-8 ml-11 mt-5 color-red">Show all</h1>

        <div className="p-10 mt-9">
          <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg w-36">
            <img className="w-full h-40" src={imgs} alt="Mountain"/>
          </div>
          <div className="font-bold text-xl ml-7 mt-3">Kobama</div>
        </div>

        <div className="pl-1 pt-[75px]">
          <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg w-36">
            <img className="w-full h-40" src={img} alt="Mountain"/>
          </div>
          <div className="font-bold text-xl ml-7 mt-3">Saloani</div>
        </div>

        <div className="p-10 mt-[35px]">
          <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg w-36">
            <img className="w-full h-40" src={imgs} alt="Mountain"/>
          </div>
          <div className="font-bold text-xl ml-7 mt-3">Prasad</div>
        </div>
      </div>
    </div>
  );
}

export default Onleaves;
