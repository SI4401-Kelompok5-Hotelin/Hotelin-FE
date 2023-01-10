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
            <h1 className="ml-2 text-base font-semibold text-Black-Normal">
              Fill in data
            </h1>
          </div>
          <div className="w-[40px] border-b-2 border-[#939393] border-slate-400 m-4"></div>
          <div className="text-white rounded-full flex items-center justify-center bg-[#1788FB] w-[35px] h-[35px] ">
            2
          </div>
          <div className="">
            <h1 className="ml-2 text-base font-semibold text-[#939393]">
              Review
            </h1>
          </div>
          <div className="w-[40px] border-b-2 border-[#939393] border-slate-400 m-4"></div>
          <div className="text-white rounded-full flex items-center justify-center bg-[#939393] w-[35px] h-[35px] ">
            3
          </div>
          <div className="">
            <h1 className="ml-2 text-base font-semibold text-[#939393]">
              Payment
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="card w-[800px] h-[545px] shadow-xl m-20">
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
                  <li className="pt-[8px] ">2 Malam</li>
                  <li className="pt-[8px] ">Twin Bed</li>
                  <li className="pt-[8px] ">1 Kamar</li>
                  <li className="pt-[8px] ">End Year Promotion</li>
                </ul>
                <div></div>
                <h2 className="text-start font-bold text-[#939393] text-[14px] pt-[30px]">
                  RINCIAN PESANAN
                </h2>
                <p className="text-start">Kautsar Firdaus</p>
              </div>

              <div>
                <h2 className="text-[14px] font-bold text-start">
                  Payment Method
                </h2>
                <p className="font-bold text-[#939393] text-[12px] ">
                  Upgrade your billing and address
                </p>
                <div className="dropdown dropdown-bottom text-[12px] pt-[30px]">
                  <label
                    tabIndex={0}
                    className="card w-[190px] font-bold bg-[#1788FB] text-white rounded-[5px] hover:bg-[#419EFD]"
                  >
                    Select Payment
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Debit/Credit Card</a>
                    </li>
                    <li>
                      <a>E banking</a>
                    </li>
                    <li>
                      <p>E Wallet</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-actions flex justify-center">
              <button className="btn btn-primary bg-[#1788FB] w-[148px] h-[40px] hover:bg-[#419EFD]">
                Edit pesanan
              </button>
            </div>
          </div>
        </div>

        <div className="card w-[386px] h-[1157px] shadow-xl m-20 rounded-[0px] bg-[#1788FB]">
          <h2 className="text-white pt-[30px] font-bold">Hotelin.comPay</h2>
        </div>
      </div>

      <Footer />
    </div>
  );
}
