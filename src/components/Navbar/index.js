import React, { useEffect } from "react";
import Logo from "../../asset/logo.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiWallet } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  const auth = localStorage.getItem("token");
  const user = localStorage.getItem("name");
  const url = process.env.REACT_APP_API_ENDPOINT + "/balance";
  const url2 = process.env.REACT_APP_API_ENDPOINT + "/profile";
  const [data, setData] = React.useState([])
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    axios
      .get(url, {
        headers: { Authorization: `${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setData(res.data.balance)
      });
  }, []);

  useEffect(() => {
    axios
      .get(url2, {
        headers: { Authorization: `${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setUsers(res.data.data.name);
      });
  }, []);

  return (
    <div className="navbar bg-base-100 container mb-8 mt-5">
      <div className="navbar-lg gap-3">
        <Link to="/">
          <h1 className="font-bold text-black ml-[80px]">Home</h1>
        </Link>
        <Link to="/">
          <h1 className="font-bold text-black">Service</h1>
        </Link>
        <Link to="/">
          <h1 className="font-bold text-black">About Us</h1>
        </Link>
      </div>
      <div className="navbar-center">
        <img src={Logo} className="w-44"></img>
      </div>
      <div className="navbar-center -mr-[35px]">
        {(() => {
        if (!auth) {
          return (
            <>
              <Link to="/login">
                <div className="btn bg-[#1788FB] border-none hover:bg-[#1788FB] hover:text-white h-[43px] w-[95px] ">
                  Log in
                </div>
              </Link>
              <Link to="/register">
                <div className="btn bg-white text-[#1788fb] border-none h-[43px] mr-[80px]">
                  Sign Up
                </div>
              </Link>
            </>
          );
        } else {
          return (
            <div className="flex items-center">
              <Link to="/topup">
                <div className="flex items-center">
                  <BiWallet className="mr-4" />
                  <div className="">
                    <h1>Rp. {data}</h1>
                  </div>
                </div>
              </Link>
              <Link to="/profile">
                <div className="flex items-center ml-4">
                  <CgProfile className="mr-4" />
                  <div className="bg-white text-[#1788fb] border-none">
                    {users}
                  </div>
                </div>
              </Link>
            </div>
          );
        }
      })()}
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </div>
  );
}
