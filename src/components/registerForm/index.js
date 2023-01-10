import React, { useState } from 'react';
import { HiArrowLeft, HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from "@chakra-ui/react";
import signup from "../../asset/signup.png";
import axios from 'axios';

export default function RegisterForm() {
  // const [error, setError] = useState({
  //   password : "",
  //   konfpassword : ""
  // });

  // const [input, setInput] = useState({
  //   password: "",
  //   konfpassword: "",
  // });

  // const onInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setInput((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  //   validateInput(e);
  // };

  // const validateInput = e => {
  //   let { name, value } = e.target;
  //   setError((prev) => {
  //     const stateObj = { ...prev, [name]: "" };

  //     switch (name) {
  //       case "password":
  //         if (!value) {
  //           stateObj[name] = "Please enter Password.";
  //         } else if (input.konfpassword && value !== input.konfpassword) {
  //           stateObj["konfpassword"] =
  //             "Password and Confirm Password does not match.";
  //         } else {
  //           stateObj["konfpassword"] = input.konfpassword
  //             ? ""
  //             : error.konfpassword;
  //          }
  //         break;

  //       case "konfpassword":
  //         if (!value) {
  //           stateObj[name] = "Please enter Confirm Password.";
  //         } else if (input.password && value !== input.password) {
  //           stateObj[name] = "Password and Confirm Password does not match.";
  //         }
  //         break;

  //       default:
  //         break;
  //     }

  //     return stateObj;
  //   });
  // }

  // const passwordHandle = (e) => {
  //   if (!input["password"]) {
  //     setError(false)
  //   } else {
  //     setError(true)
  //   }
  // };
  const url = process.env.REACT_APP_API_ENDPOINT + "/register";
  const navigate = useNavigate();
  const toast = useToast();
  const [data, setData] = useState([{}]);
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }


  function submit(e) {
    e.preventDefault();
    axios.post(url, data).then((res) => {
      if (res.message === "Network Error") {
        console.log(res);
        alert("Periksa koneksi internet anda");
      } else {
        console.log(res);
        navigate("/login");
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
      }
    });
  }

  return (
    <div className="w-[1314px] h-[870px] bg-white rounded-lg shadow-lg flex">
      <div className="ml-[88px] flex flex-col">
        <Link to="/login">
          <HiArrowLeft className="w-6 h-6 mt-[36px]" />
        </Link>
        <h1 className="flex justify-start mt-[29px] font-medium text-[20px]">
          Nama Lengkap
        </h1>
        <input
          className="w-[479px] h-[58px] border-[3px] rounded-[10px] border-black mt-[8px] pl-3 placeholder:font-base placeholder:text-[20px]"
          placeholder="Nama Lengkap"
          type="text"
          id="name"
          value={data.name}
          onChange={(e) => handle(e)}
        />
        <h1 className="flex justify-start mt-[18px] font-medium text-[20px]">
          Email
        </h1>
        <input
          className="w-[479px] h-[58px] border-[3px] rounded-[10px] border-black mt-[8px] pl-3 placeholder:font-base placeholder:text-[20px]"
          placeholder="Email"
          type="text"
          id="email"
          value={data.email}
          onChange={(e) => handle(e)}
        />
        <h1 className="flex justify-start mt-[18px] font-medium text-[20px]">
          No HP
        </h1>
        <input
          className="w-[479px] h-[58px] border-[3px] rounded-[10px] border-black mt-[8px] pl-3 placeholder:font-base placeholder:text-[20px]"
          placeholder="No HP"
          type="text"
          id="phone"
          value={data.phone}
          onChange={(e) => handle(e)}
        />
        <h1 className="flex justify-start mt-[18px] font-medium text-[20px]">
          Alamat
        </h1>
        <input
          className="w-[479px] h-[58px] border-[3px] rounded-[10px] border-black mt-[8px] pl-3 placeholder:font-base placeholder:text-[20px]"
          placeholder="Alamat"
          type="text"
          id="address"
          value={data.address}
          onChange={(e) => handle(e)}
        />
        <h1 className="flex justify-start mt-[18px] font-medium text-[20px]">
          Password
        </h1>
        <input
          className="w-[479px] h-[58px] border-[3px] rounded-[10px] border-black mt-[8px] pl-3 placeholder:font-base placeholder:text-[20px]"
          placeholder="Password"
          type="password"
          id="password"
          name="password"
          value={data.password}
          onChange={(e) => handle(e)}
        />
        {/* {error.password && <span className="err">{error.password}</span>} */}
        <h1 className="flex justify-start mt-[18px] font-medium text-[20px]">
          Konfirmasi Password
        </h1>
        <input
          className="w-[479px] h-[58px] border-[3px] rounded-[10px] border-black mt-[8px] pl-3 placeholder:font-base placeholder:text-[20px]"
          placeholder="Konfirmasi Password"
          type="password"
          id="konfpassword"
          name="konfpassword"
          // value={data.email}
          // onChange={(e) => handle(e)}
        />
        {/* {error.konfpassword && (
          <span className="err">{error.konfpassword}</span>
        )} */}
        <button className="w-[479px] h-[40px] bg-[#168AFF] text-white rounded-[10px] font-semibold mt-[30px]" onClick={submit}>
          Daftar
        </button>
        <h1 className="flex justify-start ml-[136px] mt-[25px] text-base font-semibold">
          Sudah punya akun?{" "}
          <Link to="/login">
            <span className="text-[#168AFF] ml-2">Masuk</span>{" "}
          </Link>
        </h1>
      </div>
      <div className="ml-[90px] mt-[119px]">
        <h1 className="text-[49px] font-bold flex justify-start">Sign Up</h1>
        <img src={signup} alt="signup" className="mt-[57px]" />
      </div>
    </div>
  );
}
