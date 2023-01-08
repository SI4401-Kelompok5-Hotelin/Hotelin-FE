import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { HiOutlineChartSquareBar, HiPlus } from "react-icons/hi";
import { IoListOutline } from "react-icons/io5";
import logo from "../../asset/logo.png";

export default function Sidebar() {
  const location = useLocation();
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  // const userObj = JSON.parse(user);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
  };


  return (
    <>
      <div className="min-h-screen fixed left-0 bg-white w-20 lg:w-[290px]">
        <Link to="/admin">
          <div className="flex items-center ml-5 mt-[50px]">
            <img
              src={logo}
              alt="logo"
              className=""
            />
          </div>
        </Link>
        <div className="w-16 lg:w-[250px] mx-auto mt-14 border-b border-[#BBBBBB]">
          <Link
            to="/admin"
            className={`flex flex-row items-center justify-center h-10 mb-5 font-medium rounded lg:justify-start text-Info-Normal hover:bg-sky-500 hover:text-white active:bg-Primary-NormalActive ${
              location.pathname === "/admin" && "bg-sky-500 text-white"
            }`}
          >
            <HiOutlineChartSquareBar className="w-6 h-6 lg:ml-3 lg:mr-2" />
            <span className="hidden text-base lg:block">Dashboard</span>
          </Link>
        </div>
        <div className="hidden mt-3 flex font-semibold lg:block">
          Data
        </div>
        <div className="w-16 lg:w-[250px] mx-auto">
          <Link
            to="/listhotel"
            className={`flex flex-row items-center justify-center h-10 font-medium rounded lg:justify-start text-Info-Normal hover:bg-sky-500 hover:text-white active:bg-Primary-NormalActive ${
              location.pathname === "/listhotel" &&
              "bg-sky-500 text-white"
            }`}
          >
            <IoListOutline className="w-6 h-6 lg:ml-3 lg:mr-2" />
            <span className="hidden text-base lg:block">List Hotel</span>
          </Link>
        </div>
        <div className="w-16 lg:w-[250px] mx-auto">
          <Link
            to="/addhotel"
            className={`flex flex-row items-center justify-center h-10 mb-5 font-medium rounded lg:justify-start text-Info-Normal hover:bg-sky-500 hover:text-white active:bg-Primary-NormalActive ${
              location.pathname === "/addhotel" &&
              "bg-sky-500 text-white"
            }`}
          >
            <HiPlus className="w-6 h-6 lg:ml-3 lg:mr-2" />
            <span className="hidden text-base lg:block">Add Hotel</span>
          </Link>
        </div>
        <div className="w-16 lg:w-[260px] mx-auto mt-[100px] border-t border-[#BBBBBB]">
          <Link to="/dashboard/profile">
            <div className="mt-6">
              <img
                src="logo"
                alt="avatar"
                border="0"
                className="float-left w-10 h-10 ml-3 mr-3 rounded-full"
              />
              <p className="hidden text-sm font-medium lg:block">
                {name}
              </p>
              <p className="hidden text-sm font-medium text-Info-Normal lg:block">
                {email}
              </p>
            </div>
          </Link>
          <Link to="/">
            <button
              onClick={handleLogout}
              className="w-16 h-8 mt-8 font-medium text-white bg-red-500 rounded"
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
