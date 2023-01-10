import React from "react";
import Footer from "../footer";
import Header from "../Navbar";
import logo from "../../asset/logo.png";

export default function Payment() {
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
                <p className="text-start">000000111111</p>
                <div></div>
                <h2 className="text-start font-bold text-[#939393] text-[14px] pt-[30px]">
                  RINCIAN PESANAN
                </h2>
                <p className="text-start">Hotel Mulia Senayan</p>
                <h2 className="text-start font-bold text-[#939393] text-[14px] pt-[30px]">
                  RINCIAN PESANAN
                </h2>
                <ul className="list-disc ml-[20px] text-[#939393] font-bold text-start">
                  <li className="pt-[8px] ">Senin, 26 Desember 2022</li>
                  <li className="pt-[8px] ">1 Malam</li>
                  <li className="pt-[8px] ">Twin Bed</li>
                  <li className="pt-[8px] ">1 Kamar</li>
                  <li className="pt-[8px] ">Splendor City View</li>
                </ul>
                <div></div>
                <h2 className="text-start font-bold text-[#939393] text-[14px] pt-[30px]">
                  RINCIAN PESANAN
                </h2>
                <p className="text-start italic">Fauzan Nur Fachri</p>
                <h2 className="text-start font-bold text-[#939393] text-[14px] pt-[30px]">
                  TOTAL
                </h2>

                <div>
                  <p className="text-start italic font-bold">
                    Splendor City View
                  </p>
                  <p className="text-start">
                    (Rp 2.000.0000)
                  </p>
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
          <button className="btn bg-[#FFC50A] text-white mt-[36px] border-none ml-[500px] w-[200px] h-[40px] text-[10px] hover:bg-[#419EFD]">
            <p className="">Back to Home Page</p>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
