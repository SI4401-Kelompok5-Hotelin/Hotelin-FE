import React from 'react';
import { HiArrowLeft, HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { Link } from 'react-router-dom';
import signup from "../../asset/signup.png";

export default function RegisterForm() {
  return (
    <div className="w-[1314px] h-[870px] bg-white rounded-lg shadow-lg flex">
      <div className="ml-[88px] flex flex-col">
        <HiArrowLeft className="w-6 h-6 mt-[36px]" />
        <h1 className="flex justify-start mt-[29px] font-medium text-[20px]">
          Nama Lengkap
        </h1>
        <input
          className="w-[479px] h-[58px] border-[3px] rounded-[10px] border-black mt-[8px] pl-3 placeholder:font-base placeholder:text-[20px]"
          placeholder="Nama Lengkap"
          type="text"
          id="nama"
          // value={data.email}
          // onChange={(e) => handle(e)}
        />
        <h1 className="flex justify-start mt-[18px] font-medium text-[20px]">
          Email
        </h1>
        <input
          className="w-[479px] h-[58px] border-[3px] rounded-[10px] border-black mt-[8px] pl-3 placeholder:font-base placeholder:text-[20px]"
          placeholder="Email"
          type="text"
          id="email"
          // value={data.email}
          // onChange={(e) => handle(e)}
        />
        <h1 className="flex justify-start mt-[18px] font-medium text-[20px]">
          No HP
        </h1>
        <input
          className="w-[479px] h-[58px] border-[3px] rounded-[10px] border-black mt-[8px] pl-3 placeholder:font-base placeholder:text-[20px]"
          placeholder="No HP"
          type="text"
          id="nohp"
          // value={data.email}
          // onChange={(e) => handle(e)}
        />
        <h1 className="flex justify-start mt-[18px] font-medium text-[20px]">
          Alamat
        </h1>
        <input
          className="w-[479px] h-[58px] border-[3px] rounded-[10px] border-black mt-[8px] pl-3 placeholder:font-base placeholder:text-[20px]"
          placeholder="Alamat"
          type="text"
          id="alamat"
          // value={data.email}
          // onChange={(e) => handle(e)}
        />
        <h1 className="flex justify-start mt-[18px] font-medium text-[20px]">
          Password
        </h1>
        <input
          className="w-[479px] h-[58px] border-[3px] rounded-[10px] border-black mt-[8px] pl-3 placeholder:font-base placeholder:text-[20px]"
          placeholder="Password"
          type="text"
          id="password"
          // value={data.email}
          // onChange={(e) => handle(e)}
        />
        <h1 className="flex justify-start mt-[18px] font-medium text-[20px]">
          Konfirmasi Password
        </h1>
        <input
          className="w-[479px] h-[58px] border-[3px] rounded-[10px] border-black mt-[8px] pl-3 placeholder:font-base placeholder:text-[20px]"
          placeholder="Konfirmasi Password"
          type="text"
          id="password2"
          // value={data.email}
          // onChange={(e) => handle(e)}
        />
        <button className="w-[479px] h-[40px] bg-[#168AFF] text-white rounded-[10px] font-semibold mt-[40px]">
          Daftar
        </button>
        <h1 className="flex justify-start ml-[136px] mt-[25px] text-base font-semibold">
          Sudah punya akun? <Link to="/login"><span className="text-[#168AFF] ml-2">Masuk</span> </Link>
        </h1>
      </div>
      <div className='ml-[90px] mt-[119px]'>
        <h1 className='text-[49px] font-bold flex justify-start'>Sign Up</h1>
        <img src={signup} alt="signup" className='mt-[57px]' />
      </div>
    </div>
  );
}
