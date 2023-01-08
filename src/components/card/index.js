import React from "react";
import { MdLocationPin } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";

export default function CardHotel() {
  return (
    <div className="absolute mt-[-50px]">
      <div className="card shadow h-[169px] flex justify-start w-[1086px] mx-52 rounded-[20px]">
        <div className="">
          <div className="flex-auto max-w-4xl ">
            <h1 className="text-start pl-8 mb-4 text-lg font-bold text-[#1788FB] pt-2">
              Dimana kamu ingin menginap?
            </h1>
          </div>
          <div className="flex">
            <div className="dropdown ml-[32px]">
              <label
                tabIndex={0}
                className="btn m-1 w-[209px] h-[66px] bg-white text-[#444444] justify-start border-[#93939390] rounded-md outline-4 "
              >
                {" "}
                <MdLocationPin className="mr-3 text-[#1788FB] text-xl" />
                Destination
                <h1 className="text-[#939393] text-[10px]">
                  Tujuan atau properti
                </h1>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="dropdown absolute mt-[-74px] left-64">
            <label
              tabIndex={0}
              className="btn m-1 w-[418px] h-[66px] bg-white text-[#444444] justify-start border-[#93939390] rounded-md outline-4 "
            >
              {" "}
              <div className="flex justify-between">
                <div className="text-start">
                  <GrLocation className="  text-[#1788FB] " />
                  Check-In
                  <h2 className=" text-[#939393] text-[10px]">
                    Tanggal Check-In
                  </h2>
                </div>
                <div className="text-end">
                  <GrLocation className="text-[#1788FB] " />
                  Check-Out
                  <h2 className="text-[#939393] text-[10px] text-end">
                    Tanggal Check-Out
                  </h2>
                </div>
              </div>
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>

          <div className="dropdown absolute mt-[-74px] left-[690px]">
            <label
              tabIndex={0}
              className="btn m-1 w-[209px] h-[66px] bg-white text-[#444444] justify-start border-[#93939390] rounded-md outline-4 "
            >
              {" "}
              <HiUserGroup className="mr-3 text-[#1788FB] text-xl" />
              Tamu
              <h1 className="text-[#939393] text-[10px]">
                Masukan jumlah tamu
              </h1>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>

          <div className="card-actions  absolute mt-[-74px] ml-[980px] =">
            <label
              tabIndex={0}
              className="btn m-1 w-[66px] h-[66px] bg-[#1788FB] text-[#444444] border-[#93939390] rounded-md outline-4 hover:bg-[#79B7F5]"
            >
              {" "}
              <BsSearch className="text-white text-xl " />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
