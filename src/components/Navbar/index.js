import React from "react";
import Logo from "../../asset/logo.png";
export default function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-lg ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ></svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <img src={Logo} className="w-44"></img>
      </div>
      <div className="navbar-center">
        <div className="card-actions mt-2">
          <button className="btn bg-[#1788FB]">Log in</button>
        </div>

        <div className="card-actions mt-2 border-none">
          <button className="btn bg-white text-[#1788fb]">Sign Up</button>
        </div>

        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </div>
  );
}
