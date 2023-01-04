import React, {useState} from 'react';
import { HiArrowLeft, HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import pana from "../../asset/pana.png";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const url = process.env.REACT_APP_API_ENDPOINT + "/api/login";
  const [data, setData] = useState([{}]);

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  const toggle = () => {
    setOpen(!open);
  };

  function submit(e) {
    e.preventDefault();
    axios.post(url, data
      ).then((res) => {
      if (res.message === "Network Error") {
        console.log(res);
        alert("Periksa koneksi internet anda");
      } else {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", res.data.user)
        navigate("/");
      }
    });
  }

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
            type="text"
            id="email"
            value={data.email}
            onChange={(e) => handle(e)}
          />
          <input
            className="w-[479px] h-[58px] border-[3px] rounded-[10px] border-black mt-[25px] pl-3 placeholder:font-base placeholder:text-[20px]"
            placeholder="Masukkan password anda"
            type={open ? "text" : "password"}
            id="password"
            onChange={(e) => handle(e)}
            value={data.password}
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
          <button className="w-[479px] h-[58px] bg-[#168AFF] rounded-lg text-white mt-[31px] font-bold text-[20px]" onClick={submit}>
            Masuk
          </button>
          <button className="w-[479px] h-[58px] border-black border-[3px] rounded-lg text-black mt-[31px] font-bold text-[20px] flex justify-center items-center">
            <FcGoogle className="w-[30px] h-[30px] mr-3" /> Masuk Lewat Google
          </button>
          <h1 className="flex justify-start ml-[136px] mt-[25px] text-base font-semibold">
            Belum punya akun? <Link to="/register"><span className="text-[#168AFF] ml-2">Daftar</span></Link>
          </h1>
        </div>
        <img
          src={pana}
          className="w-[361.36px] h-[346.44px] mt-[188px] ml-[95px]"
        />
      </div>
    </div>
  );
}
