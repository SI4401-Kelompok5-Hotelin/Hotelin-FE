import React from "react";
import logo from "../../asset/logo.png";
import Mulia from "../../asset/mulia.jpg";
import { RiHotelFill } from "react-icons/ri";
import { BiTimeFive } from "react-icons/bi";
import { BsChatLeftText } from "react-icons/bs";
import Footer from "../footer";

export default function ReviewBooking() {
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
          <div className="text-white rounded-full flex items-center justify-center bg-[#1788FB] w-[35px] h-[35px] ">
            2
          </div>
          <div className="">
            <h1 className="ml-2 text-base font-semibold">Review</h1>
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

      <div className="">
        <div className="mt-[118px]">
          <h1 className="font-bold text-[40px] text-start ml-[199px]">
            Please Review Your Booking
          </h1>
          <p className="text-[20px] text-start ml-[199px] text-[#939393]">
            Please review your booking details before continuing to payment{" "}
          </p>
        </div>
      </div>

      <div className="">
        <div className="card mt-[20px] w-[727px] h-[257px] ml-[84px] rounded-[5px]">
          <div className="flex">
            <img
              src={Mulia}
              className="w-[226px] h-[140px] pl-[28px] pt-[14px] "
            ></img>
            <div>
              <div className="flex ml-[38px] mt-[20px]">
                <RiHotelFill className="text-[38px] text-[#1788FB]" />{" "}
                <h1 className="py-2">Hotel Mulia Senayan</h1>
              </div>
              <div className="flex justify-center ml-[20px] mt-[15px]">
                <div className="">
                  <h1 className="font-bold text-[12px] text-[#939393]">
                    Check-in
                  </h1>
                  <p className="ml-[22px] font-bold text-[12px] pt-[10px] ">
                    26 Des 2022
                  </p>
                  <p className="ml-[12px]  text-[12px] pt-[10px] ">
                    From 14:00
                  </p>
                </div>
                <div className="">
                  <h1 className="ml-[80px] font-bold text-[12px] text-[#939393]">
                    Check-out
                  </h1>
                  <p className="ml-[90px] font-bold text-[12px] pt-[10px]">
                    27 Des 2022
                  </p>
                  <p className="ml-[88px]  text-[12px] pt-[10px]">
                    Before 12:00
                  </p>
                </div>
                <div className="">
                  <h1 className="ml-[80px] font-bold text-[12px] text-[#939393]">
                    Duration of Stay
                  </h1>
                  <p className=" ml-[28px] font-bold text-[12px] pt-[10px]">
                    1 night
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h1 className="ml-[28px] text-start text-[12px] mt-[16px] font-bold">
            Splendor City View
          </h1>
          <div className="flex justify-between">
            <div>
              <h1 className="ml-[28px] text-start text-[12px] mt-[16px] font-bold text-[#939393]">
                Guests per room
              </h1>
              <h1 className="ml-[28px] text-start text-[12px] mt-[16px] font-bold text-[#939393] ">
                Bed type
              </h1>
            </div>
            <div>
              <h1 className="mr-[500px] text-[12px] mt-[16px] ">1 Guest</h1>
              <h1 className="mr-[500px] text-[12px] mt-[16px] ">Twin Bed </h1>
            </div>
          </div>
        </div>
        <div className="card mt-[42px] w-[727px] h-[183px] ml-[84px] rounded-[5px]">
          <h1 className="ml-[28px] text-start text-[12px] mt-[16px] font-bold">
            Accomodation Policies
          </h1>
          <div className="flex ml-[28px] mt-[54px]">
            <div className="flex">
              <BiTimeFive className=" text-[24px]" />
              <h1 className="py-1 font-bold pl-[4px] text-[12px] ">
                Check-in/Check-out Time
              </h1>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <p className="text-start font-bold text-[12px] pt-[10px] text-[#939393] ml-[56px] ">
                Check-in:
              </p>
              <h1 className=" pt-[12px] pl-[10px] text-[12px] ">From 14:00</h1>
            </div>
            <div className="flex">
              <p className="text-start font-bold text-[12px] pt-[10px] text-[#939393] ml-[5px] ">
                Check-out:
              </p>
              <h1 className=" pt-[12px] pl-[10px] text-[12px] mr-[375px] ">
                Before 12:00
              </h1>
            </div>
          </div>
        </div>

        <div className="card mt-[42px] w-[727px] h-[190px] ml-[84px] rounded-[5px]">
          <h1 className="ml-[28px] text-start text-[12px] mt-[16px] font-bold">
          Hotel & Room Policy
          </h1>
          <div className="flex ml-[28px] mt-[38px]">
            <div className="flex">
              <BsChatLeftText className=" text-[24px]" />
              <h1 className="py-1 font-bold pl-[4px] text-[12px] ">
                Cancellation Policy
              </h1>
            </div>
          </div>
          <p className="text-start ml-[56px] text-[10px]">
            Cancellation Policy Applies
          </p>
          <div className="card w-[722px] h-[58px] ml-[2px] mt-[20px] border-none bg-[#f4f4f4] rounded-[1px]">
            <div className="flex ">
              <p className="text-start font-bold text-[10px] pt-[10px] text-[#939393] ml-[56px]  ">
                This reservation is non-refundable.
              </p>
            </div>
            <div className="flex">
              <p className="text-start font-bold text-[10px] pt-[10px] text-[#939393] ml-[56px] ">
                Times displayed ar based on the accommodation’s local time.
              </p>
            </div>
          </div>
        </div>
        <h1 className="text-start mt-[42px] ml-[84px] font-bold">
          Price Detail
        </h1>
        <div className="card w-[728px] h-[172px] ml-[84px]  mt-[42px] rounded-[1px]">
          <div className="card w-[727px] h-[42px] rounded-[1px]">
            <h1 className="ml-[38px] text-start text-[12px] pt-[8px] font-bold">
              Total
            </h1>
          </div>
          <div className="flex justify-between font-bold">
            <div>
              <h1 className=" text-start ml-[38px]  mt-[14px] text-[12px]">
                Splendor City View (1 night)
              </h1>
              <h1 className=" text-start ml-[38px] mt-[14px] text-[12px]">
                Taxes and fees
              </h1>
            </div>

            <div>
              <h1 className=" mr-[38px] mt-[14px] text-[12px]">Rp 2.000.000</h1>
            </div>
          </div>
          <div className="card w-[727px] h-[50px] mt-[50px] rounded-[1px]">
            <h1 className="font-bold text-end pt-[14px] pr-[38px] text-[12px]">
              Rp 2.000.000
            </h1>
          </div>
        </div>

        <div className="">
          <button className="btn bg-[#FFC50A] text-white mt-[28px] border-none mr-[325px] w-[437px] h-[40px] text-[10px] hover:bg-[#419EFD]">
            {" "}
            Continue to Payment
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
