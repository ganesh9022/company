import React from 'react'

import { CiUser } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";
import { FaCircleUser } from "react-icons/fa6";
import { BiHelpCircle } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FcLeave } from "react-icons/fc";
import { MdNotifications } from "react-icons/md";
import { IoMdMic } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import img from './assets/book.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      


<nav class="bg-white border-gray-200 dark:bg-gray-900  justify-between ml-[250px] w-auto">    
  <div class="max-w-screen-xl sticky flex flex-wrap items-center  mx-auto p-4 navbar-default">
    <Link to="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl mt-[10px] font-semibold whitespace-nowrap dark:text-white justify-between ml-8 ">Welcome, Nikhil Joshi!</span>
    </Link>
    <div>
    
      <div className="fixed top-3 right-0 mr-11  flex items-center p-2  flex-wrap">
      <div className="mr-3 rounded-full border p-2 bg-lime-500 ">
        <MdNotifications size="1.5em" color='white'/>
      </div>

      <div className="flex items-center bg-white border rounded-full p-2">
        <IoIosSearch size="1.2em"/>
        <input
          type="text"
          placeholder="  Search here"
          className="outline-none bg-transparent"
        />
        <IoMdMic size="1.2em"/>
      </div>
    </div>
    </div>
    <button data-collapse-toggle="navbar-default logo-sidebar" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
   
  </div>
</nav>








<aside id="logo-sidebar" class="fixed   top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0  border-x-2 border-slate-200" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
  
      <Link to='/Dashboard' class="flex items-center ps-2.5 mb-5 pt-3 ml-1">
         <img  src={img} class="h-6 me-3 sm:h-7" alt="Avkash  Logo" />
         <span class="self-center  text-2xl font-semibold whitespace-nowrap text-green-500">Avkash </span>
      </Link>
      <ul class="space-y-2 font-medium">
         <li>
            <Link to='/Dashboard' class="flex items-center p-2 mt-[40px] text-gray-900 rounded-lg dark:text-white  hover:text-green-500 group">
               <svg class="w-8  h-6 text-gray-500 transition duration-75 ml-[-2px] dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  {/* <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/> */}
                  {/* <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/> */}
               </svg>
               <span class="flex-1 ms-1 whitespace-nowrap ml-[0px] text-[18px]">Dashboard</span>

            </Link>
         </li>
         <li>
            <Link to='/Applyleaves' class="flex items-center p-2 text-gray-900 rounded-lg hover:text-green-500 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-6 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
               {/* <FcLeave /> */}
                  {/* <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/> */}
               </svg>
               <span class="flex-1 ms-2 whitespace-nowrap mt-[0px] ml-[3px]  text-[18px]">Apply Leaves</span>

            </Link>
         </li>
         <li>
            <Link to='/Payslip' class="flex items-center p-2 text-gray-900 rounded-lg hover:text-green-500 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  {/* <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/> */}
                 {/* < FaMoneyCheckDollar/> */}
               </svg>
               <span class="flex-1 ms-1 whitespace-nowrap mt-[0px] text-[18px] ml-[0px]">Payslip</span>

            </Link>
         </li>
         
         <li>
            <Link to='/Setting' class="flex items-center p-2 text-gray-900 rounded-lg hover:text-green-500 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-8 h-7 ml-[-5px] text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
               {/* <AiFillSetting /> */}

                  {/* <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/> */}
               </svg>
               <span class="flex-1 ms-1 whitespace-nowrap mt-[-5px] ml-[0px] text-[18px]">Settings</span>
            </Link>
         </li>
        
       

         <li>
            <Link to='/Notification' class="flex items-center mt-[60px] p-2 text-gray-900 rounded-lg hover:text-green-500 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  {/* <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/> */}
               </svg>
               <span class="flex-1 ms-2 whitespace-nowrap mt-[0px]  ml-[6px] text-[18px]">Notification</span>

               <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </Link>
         </li>
         <li>
            <Link to='/Profile' class="flex items-center p-2 text-gray-900 rounded-lg hover:text-green-500 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-7 h-7 ml-[-3px] text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
               {/* <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src=" CiUser " alt="Bordered avatar"/> */}
           
                  {/* <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/> */}
               </svg>
               <span class="flex-1 ms-1 whitespace-nowrap mt-[-5px] ml-[0px] text-[18px]">My Profile</span>

               {/* <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span> */}
            </Link>
         </li>
         <li>
            <Link to='/Logout' class="flex items-center ml-[-3px] p-2 text-gray-900 rounded-lg hover:text-green-500 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
               {/* <AiOutlineLogout /> */}
                  {/* <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/> */}
               </svg>
               <span class="flex-1 ms-1 whitespace-nowrap mt-[-5px] ml-[0px]  text-[18px]">Logout</span>

            </Link>
         </li>
         
      
         
         <li>
            <Link to='/Helpsupport' class="flex items-center mt-[90px] p-2 text-gray-900 rounded-lg hover:text-green-500 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  {/* <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/> */}
               </svg>
               <span class="flex-1 ms-0 whitespace-nowrap mt-[-5px] ml-[-6px] text-[18px]">Help & Support</span>

            </Link>

         </li>

      </ul>

   </div>
</aside>



    </div>
  )
}

export default Navbar
