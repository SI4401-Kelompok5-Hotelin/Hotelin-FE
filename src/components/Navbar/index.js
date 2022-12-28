import React from "react";
import Logo from "../../asset/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="navbar bg-base-100 container">
      <div className="navbar-lg gap-3 ml-[40px]">
        <Link to="/">
          <h1 className="font-bold text-black">Home</h1>
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
        <div className="card-actions mt-2">
          <button className="btn bg-[#1788FB] border-none h-[43px]">
            Log in
          </button>
        </div>

        <div className="card-actions mt-2 border-none">
          <button className="btn bg-white text-[#1788fb] border-none h-[43px]">
            Sign Up
          </button>
        </div>

        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </div>
  );
}
