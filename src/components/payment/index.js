import React, { useEffect, useState } from "react";
import Footer from "../footer";
// import Header from "../Navbar";
import logo from "../../asset/logo.png";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Payment() {
  const data = localStorage.getItem("data");
  const hotelid = localStorage.getItem("hotelid");
  const price = localStorage.getItem("price");
  const hotelname = localStorage.getItem("hotelname");
  const newData = JSON.parse(data);
  const url2 = process.env.REACT_APP_API_ENDPOINT + "/profile";
  const [data2, setData2] = useState([]);

  useEffect(() => {
    axios
      .get(url2, {
        headers: { Authorization: `${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setData2(res.data.data.name);
      });
  }, []);

  return (
    <div>
      <div>
        <img src={logo} alt="logo" className="ml-[60px] mt-[19px]" />
        <div className="absolute top-0 right-[202px] flex items-center mt-8">
          <div className="text-white rounded-full flex items-center justify-center bg-[#939393] w-[35px] h-[35px]">
            1
          </div>
          <div className="">
            <h1 className="ml-2 text-base font-semibold text-[#939393]">
              Fill in data
            </h1>
          </div>
          <div className="w-[40px] border-b-2 border-[#939393] border-slate-400 m-4"></div>
          <div className="text-white rounded-full flex items-center justify-center bg-[#939393] w-[35px] h-[35px] ">
            2
          </div>
          <div className="">
            <h1 className="ml-2 text-base font-semibold text-[#939393]">
              Review
            </h1>
          </div>
          <div className="w-[40px] border-b-2 border-[#939393] border-slate-400 m-4"></div>
          <div className="text-white rounded-full flex items-center justify-center bg-[#1788FB] w-[35px] h-[35px] ">
            3
          </div>
          <div className="">
            <h1 className="ml-2 text-base font-semibold ">Invoice</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="card w-[700px] h-[600px] shadow-xl m-20 rounded-[5px]">
          <div className="card-body">
            <div className="flex justify-between">
              <div>
                <h2 className="text-start font-bold text-[#939393] text-[14px]">
                  NO. PESANAN
                </h2>
                <p className="text-start">{hotelid}</p>
                <div></div>
                <h2 className="text-start font-bold text-[#939393] text-[14px] pt-[30px]">
                  NAMA HOTEL
                </h2>
                <p className="text-start">{hotelname}</p>
                <h2 className="text-start font-bold text-[#939393] text-[14px] pt-[30px]">
                  RINCIAN PESANAN
                </h2>
                <ul className="list-disc ml-[20px] text-[#939393] font-bold text-start">
                  <li className="pt-[8px] ">{newData.check_in} (Check In)</li>
                  <li className="pt-[8px] ">{newData.duration} Malam</li>
                  <li className="pt-[8px] ">Twin Bed</li>
                  <li className="pt-[8px] ">1 Kamar</li>
                </ul>
                <div></div>
                <h2 className="text-start font-bold text-[#939393] text-[14px] pt-[30px]">
                  NAMA PEMESAN
                </h2>
                <p className="text-start italic">{data2}</p>
                <h2 className="text-start font-bold text-[#939393] text-[14px] pt-[30px]">
                  TOTAL
                </h2>

                <div>
                  <p className="text-start">Rp {price}</p>
                </div>
              </div>

              <div>
                <h2 className="text-[40px] font-bold text-start">INVOICE</h2>
                <p className="text-[#939393] text-[12px] italic mr-[50px]">
                  Tanda bukti pembayaran
                </p>
              </div>
            </div>

            <div className="card-actions flex justify-center">
              <h1 className="text-success italic">Pembayaran Lunas</h1>
            </div>
          </div>
          <Link to="/">
            <button className="btn bg-[#FFC50A] text-white mt-[100px] border-none ml-[500px] w-[200px] h-[40px] text-[10px] hover:bg-[#419EFD]">
              Back to Home Page
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
