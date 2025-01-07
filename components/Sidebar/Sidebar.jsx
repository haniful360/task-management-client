import React from "react";
// import logo from "@/assets/images/Logo.svg";
import logo from '@/assets/images/Logo.svg';
import dashboard from "../../assets/images/Dashboard.svg";
import team from "../../assets/images/user.svg";
import wallet from "../../assets/images/Wallet.svg";
import time from "../../assets/images/time.svg";
import trophy from "../../assets/images/trophy.svg";
import notification from "../../assets/images/Notification.svg";
import setting from "../../assets/images/Setting.svg";
import hire from "../../assets/images/hire.svg";
import Rectangle from "../../assets/images/Rectangle.svg";
import down from "../../assets/images/down.svg";
import frame from "../../assets/images/frame.png";
import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className="hidden lg:block shadow-md">
      {/* Logo */}
      <div className=" w-[253px] min-h-screen  p-6 flex flex-col justify-between">
        <div className="flex items-center space-x-3 mb-8">
          <a href="/">
            <Image src={logo} alt="Logo" className="w-[213px] h-[50px]" />
          </a>
        </div>

        {/* Menu */}
        <nav>
          <p className="text-sm text-gray-500 uppercase mb-4 ml-4">Menu</p>
          <ul className="space-y-2">
            {/* Menu Item */}
            <li className="flex items-center space-x-3 text-[#70747B] hover:text-black cursor-pointer h-14 px-4 rounded-lg hover:bg-gray-100">
              <Image src={dashboard} alt="Dashboard" />
              <span className="text-base ">Home</span>
            </li>

            {/* Team */}
            <li className="flex items-center space-x-3 text-[#70747B] hover:text-black cursor-pointer h-14 px-4 rounded-lg hover:bg-gray-100">
              <Image src={team} alt="Team" />
              <span className="text-base ">Team</span>
            </li>

            {/* Highlighted Menu Item */}
            <li className="relative inline-block">
              <div className="absolute inset-0 bg-black rounded-xl translate-x-2"></div>
              <button className="relative bg-[#D9F27E] font-medium text-black  rounded-xl px-4 py-4 flex items-center space-x-2 shadow-md h-14">
                <Image src={hire} alt="Hire & Onboard" />
                <span>Hire & Onboard</span>
              </button>
            </li>

            {/* Dropdown Items */}
            <li className="flex items-center space-x-3 text-[#70747B] hover:text-black cursor-pointer h-14 px-4 rounded-lg hover:bg-gray-100">
              <Image src={wallet} alt="Payroll" />
              <span className="text-base ">Payroll</span>
            </li>
            <li className="flex items-center space-x-3 text-[#70747B] hover:text-black cursor-pointer h-14 px-4 rounded-lg hover:bg-gray-100">
              <Image src={time} alt=" Tracking" />
              <span className="text-base ">Time Tracking</span>
            </li>
            <li className="flex items-center space-x-3 text-[#70747B] hover:text-black cursor-pointer h-14 px-4 rounded-lg hover:bg-gray-100">
              <Image src={trophy} alt="Benefits" />
              <span className="text-base ">Benefits</span>
            </li>

            {/* Notifications and Settings */}
            <div className="pt-6">
              <li className="flex items-center space-x-3 text-[#70747B] hover:text-black cursor-pointer h-14 px-4 rounded-lg hover:bg-gray-100">
                <Image src={notification} alt="Notifications" />
                <span className="text-base ">Notifications</span>
              </li>
              <li className="flex items-center space-x-3 text-[#70747B] hover:text-black cursor-pointer h-14 px-4 rounded-lg hover:bg-gray-100">
                <Image src={setting} alt="Settings" />
                <span className="text-base ">Settings</span>
              </li>
            </div>
          </ul>
        </nav>

        {/* User Profile */}
        <div className="bg-[#F6F9F2] w-[213px] rounded-lg p-4 flex items-center space-x-3 shadow-sm mt-6">
          <Image src={Rectangle} alt="User" className="h-10 w-10 rounded" />
          <div>
            <p className="text-sm  text-gray-800">Ariyan Rooben</p>
            <p className="text-xs text-gray-500">Web Designer</p>
          </div>
          <button>
            <Image src={down} alt="Dropdown" />
          </button>
        </div>

        <div className="w-[213px] h-[285px] bg-black rounded-lg flex flex-col items-center justify-between p-4 text-center text-white mt-10">
          <h2 className="text-lg text-[16px] text-[#FFFFFF] font-semibold mt-4">
            Upgrade to pro for
            <br />
            get all features
          </h2>

          <div className="flex-1 flex items-center justify-center">
            <Image src={frame} alt="Illustration" className="w-24 h-auto" />
          </div>

          <button className="bg-[#D9F27E] text-black text-sm font-medium py-2 px-4 rounded-md mt-4 hover:bg-[#a4ba53]">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
