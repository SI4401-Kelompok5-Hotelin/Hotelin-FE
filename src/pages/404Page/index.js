import React from "react";
import { useNavigate } from "react-router-dom";
import PageNotFound from "../../asset/404.png";

export default function Page404() {
  const history = useNavigate();
  return (
    <div className="w-screen h-screen">
      <div className="flex items-center justify-center pt-[60px]">
        <img
          src={PageNotFound}
          alt="404"
          className="w-[685px] h-[572px]"
        />
      </div>
      <div className="flex flex-col justify-center font-semibold text-[31px] text-[#444444] text-center mt-[30px]">
        <h1 className="">
          Oops! Sepertinya terjadi kesalahan pada
          <br /> sistem
        </h1>
        <span>
          <button
            onClick={() => history(-1)}
            className="w-[450px] h-[56px] bg-[#168AFF] rounded text-white mt-[100px] font-semibold text-[20px]"
          >
            Kembali
          </button>
        </span>
      </div>
    </div>
  );
}