import React, {useState} from 'react';
import { HiArrowLeft, HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import pana from "../../asset/pana.png";

export default function LoginForm() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-[#168AFF] w-screen h-screen flex justify-center items-center">
      <div className="w-[1110px] h-[713px] bg-white rounded shadow-lg flex">
        <div className="ml-[81px] flex flex-col justify-start">
          <HiArrowLeft className="w-6 h-6 mt-[46px]" />
          <h1 className="font-bold text-[49px] flex justify-start mt-[73px]">
            Selamat Datang
          </h1>
          <input
            className="w-[479px] h-[58px] border-[3px] rounded-[10px] border-black mt-[25px] pl-3 placeholder:font-base placeholder:text-[20px]"
            placeholder="Masukkan email anda"
          />
          <input
            className="w-[479px] h-[58px] border-[3px] rounded-[10px] border-black mt-[25px] pl-3 placeholder:font-base placeholder:text-[20px]"
            placeholder="Masukkan password anda"
            type={open ? "text" : "password"}
            id="password"
          />
          <div className="absolute top-[428px] right-[850px] text-2xl">
            {open === false ? (
              <HiOutlineEyeOff onClick={toggle} />
            ) : (
              <HiOutlineEye onClick={toggle} />
            )}
          </div>
          <div className="flex justify-start items-center mt-[22px]">
            <input
              className="w-5 h-5 rounded"
              type="checkbox"
              id="check"
              name="check"
            />
            <label className="ml-3" for="check">
              Remember me
            </label>

            <h1 className="ml-[224px] font-semibold">Lupa Password</h1>
          </div>
          <button className="w-[479px] h-[58px] bg-[#168AFF] rounded-lg text-white mt-[31px] font-bold text-[20px]">
            Masuk
          </button>
          <button className="w-[479px] h-[58px] border-black border-[3px] rounded-lg text-black mt-[31px] font-bold text-[20px] flex justify-center items-center">
            <FcGoogle className="w-[30px] h-[30px] mr-3" /> Masuk Lewat Google
          </button>
          <h1 className="flex justify-start ml-[136px] mt-[25px] text-base font-semibold">
            Belum punya akun? <span className="text-[#168AFF]">Daftar</span>
          </h1>
        </div>
        <img src={pana} className="w-[361.36px] h-[346.44px] mt-[188px] ml-[95px]" />
      </div>
    </div>
  );
}
