import React from "react";
import Header from "../Navbar";
import { BiWallet } from "react-icons/bi";
import Mandiri from "../../asset/mandiri.png";
import Bca from "../../asset/bca.png";
import Bni from "../../asset/bni.png";
import Gopay from "../../asset/gopay.png";
import Dana from "../../asset/dana.png";
import Ovo from "../../asset/ovo.png";


export default function Topupsaldo() {
  return (
    <div>
      <Header />
      <div className="flex justify-center pt-[120px]">
        <BiWallet className="text-[70px]" />
      </div>
      <h1 className="font-bold text-[30px] mt-[20px] text-[#91C60B]">
        Rp 1.000.000
      </h1>
      <h1 className="font-bold mt-[106px]">Top up via Mobile Banking</h1>

      <div className="flex justify-center">
        <div className="card w-[184px] h-[124px] m-8 rounded-[5px]">
          <img src={Bca} className="w-[83px] h-[24px] m-12"></img>
        </div>
        <div className="card w-[184px] h-[124px] m-8 rounded-[5px]">
          <img src={Mandiri} className="w-[83px] h-[24px] m-12"></img>
        </div>
        <div className="card w-[184px] h-[124px] m-8 rounded-[5px]">
          <img src={Bni} className="w-[83px] h-[30px] m-12"></img>
        </div>
      </div>
      <h1 className="font-bold mt-[57px]">Top up via E-Wallet</h1>

      <div className="flex justify-center">
        <div className="card w-[184px] h-[124px] m-8 rounded-[5px]">
          <img src={Gopay} className="w-[83px] h-[30px] m-12"></img>
        </div>
        <div className="card w-[184px] h-[124px] m-8 rounded-[5px]">
          <img src={Dana} className="w-[83px] h-[30px] m-12"></img>
        </div>
        <div className="card w-[184px] h-[124px] m-8 rounded-[5px]">
          <img src={Ovo} className="w-[83px] h-[30px] m-12"></img>
        </div>
      </div>
    </div>
  );
}
