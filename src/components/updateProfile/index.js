import React, { useState, useEffect } from 'react';
import { CgProfile } from 'react-icons/cg';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';


export default function UpdateProfile() {
    const url = process.env.REACT_APP_API_ENDPOINT + "/profile/change";
    const url2 = process.env.REACT_APP_API_ENDPOINT + "/profile";
    const [data, setData] = useState([{}])
    const toast = useToast();
    const navigate = useNavigate();

    function handle(e) {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
    };

    useEffect(() => {
      axios
        .get(url2, {
          headers: { Authorization: `${localStorage.getItem("token")}` },
        })
        .then((res) => {
          setData(res.data.data);
          console.log(res.data.data);
        });
    }, []);

    function submit(e) {
      e.preventDefault();
      axios.put(url, data, {headers: { Authorization: `${localStorage.getItem("token")}` },}).then((res) => {
        if (res.message === "Network Error") {
          console.log(res);
          alert("Periksa koneksi internet anda");
        } else {
          console.log(res);
          navigate("/profile");
          toast({
            title: "Profile Changed",
            description: "Profile has been updated.",
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top-right",
          });
        }
      });
    }

  return (
    <div className="w-screen container flex justify-center">
      <div className="flex flex-col justify-center">
        <CgProfile className="w-[80px] h-[80px] flex mx-auto" />
        <h1 className="text-[#3cc7db] mt-[21px] font-medium">Change Photo</h1>
        <label for="nama" className="flex justify-start mt-[60px]">
          Nama Lengkap
        </label>
        <input
          className="w-[1069px] h-[50px] border-[3px] rounded-[10px] border-black mt-[8px] pl-3 placeholder:font-base placeholder:text-[20px]"
          onChange={(e) => handle(e)}
          value={data.name}
          type="text"
          name="name"
          id="name"
        />
        <label for="email" className="flex justify-start mt-[18px]">
          Email
        </label>
        <input
          className="w-[1069px] h-[50px] border-[3px] rounded-[10px] border-black mt-[8px] pl-3 placeholder:font-base placeholder:text-[20px]"
          onChange={(e) => handle(e)}
          value={data.email}
          type="text"
          name="email"
          id="email"
        />
        <label for="noHP" className="flex justify-start mt-[18px]">
          Nomor HP
        </label>
        <input
          className="w-[1069px] h-[50px] border-[3px] rounded-[10px] border-black mt-[8px] pl-3 placeholder:font-base placeholder:text-[20px]"
          onChange={(e) => handle(e)}
          value={data.phone}
          type="number"
          name="phone"
          id="phone"
        />
        <label for="alamat" className="flex justify-start mt-[18px]">
          Alamat
        </label>
        <input
          className="w-[1069px] h-[50px] border-[3px] rounded-[10px] border-black mt-[8px] pl-3 placeholder:font-base placeholder:text-[20px]"
          onChange={(e) => handle(e)}
          value={data.address}
          type="text"
          name="address"
          id="address"
        />
        <label for="password" className="flex justify-start mt-[18px]">
          New Password
        </label>
        <input
          className="w-[1069px] h-[50px] border-[3px] rounded-[10px] border-black mt-[8px] pl-3 placeholder:font-base placeholder:text-[20px]"
          placeholder="New Password"
          onChange={(e) => handle(e)}
          value={data.password}
          type="password"
          name="password"
          id="password"
        />
        <div className="flex justify-center items-center mb-5 mt-5 gap-10">
          <button
            className="btn bg-[#1788FB] border-none hover:bg-[#1788FB] hover:text-white"
            onClick={submit}
          >
            Change
          </button>
          <Link to="/">
            <button
              onClick={handleLogout}
              className="btn bg-red-500 border-none hover:text-white text-white hover:bg-red-500"
            >
              Log Out
            </button>
          </Link>
          <Link to="/history">
            <button
              className="btn bg-blue-500 border-none hover:text-white text-white hover:bg-blue-700"
            >
              History Booking
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
