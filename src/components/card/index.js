import React from "react";
import { BsSearch } from "react-icons/bs";
import SearchBar from "../searchbar";

export default function CardHotel() {
  return (
    <div className="absolute z-10 ml-[70px] -mt-[60px] pb-[50px]">
      <div className="card shadow h-[169px] flex justify-start w-[1086px] mx-52 rounded-[20px]">
        <div className="">
          <div className="flex-auto max-w-4xl ">
            <h1 className="text-start pl-8 mb-4 text-lg font-bold text-[#1788FB] pt-3">
              Dimana kamu ingin menginap?
            </h1>
          </div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
