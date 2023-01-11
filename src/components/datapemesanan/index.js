import React, { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { BsCheck } from "react-icons/bs";
import Footer from "../footer";
import logo from "../../asset/logo.png";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
// import { useToast } from "@chakra-ui/react";

export default function DataPemesanan() {
  const url = process.env.REACT_APP_API_ENDPOINT + "/profile";
  // const url2 = process.env.REACT_APP_API_ENDPOINT + "booking/create"
  const navigate = useNavigate();
  // const toast = useToast();
  const params = useParams();
  const newId = String(params["id"]);
  const price = params["price"];
  localStorage.setItem("price", price)
  localStorage.setItem("roomid", newId);
  const [user, setUser] = useState([]);
  const [data, setData] = useState([]);

  // console.log(data);

  useEffect(() => {
    axios
      .get(url, {
        headers: { Authorization: `${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setUser(res.data.data);
        console.log(res.data.data);
      });
  }, []);

  function handle(e) {
    const newData = { ...user };
    newData[e.target.id] = e.target.value;
    setUser(newData);
    console.log(newData);
  }

  function handleData(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setData({ ...data, [name]: value });
  };

  function submit() {
    localStorage.setItem("data", JSON.stringify(data));
    navigate("/review")
  }

  // function submit(e) {
  //   e.preventDefault();
  //   axios
  //     .post(url, data, {
  //       headers: {
  //         Authorization: `${localStorage.getItem("token")}`,
  //       },
  //     })
  //     .then((res) => {
  //       if (res.message === "Network Error") {
  //         console.log(res);
  //         alert("Periksa koneksi internet anda");
  //       } else {
  //         console.log(res);
  //         navigate("/review");
  //         toast({
  //           title: "Booking saved",
  //           description: "We've successfully saved your booking.",
  //           status: "success",
  //           duration: 9000,
  //           isClosable: true,
  //           position: "top-right",
  //         });
  //       }
  //     });
  // }

  return (
    <div>
      <div>
        <img src={logo} alt="logo" className="ml-[60px] mt-[19px]" />
        <div className="absolute top-0 right-[202px] flex items-center mt-8">
          <div className="text-white rounded-full flex items-center justify-center bg-[#53f8ff] w-[35px] h-[35px]">
            1
          </div>
          <div className="">
            <h1 className="ml-2 text-base font-semibold text-Black-Normal">
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
        <div className="mt-[118px]">
          <h1 className="font-bold text-[40px] text-start ml-[199px]">
            Hotel Booking
          </h1>
          <p className="text-[20px] text-start ml-[199px] text-[#939393]">
            Fill in contact and guest detail below
          </p>
        </div>
      </div>

      <div className="">
        <div className="card w-[556px] h-[50px]  ml-[199px] mt-[42px] rounded-[5px]">
          <div className="flex justify-start ml-[11px] pt-[10px]">
            <CgProfile className="text-[30px] text-[#1788FB]" />
            <div className="ml-[10px]">
              <h1 className="text-[12px] font-bold text-start">
                Logged in as {user.name}{" "}
              </h1>
              <p className=" text-start font-bold text-[#939393] text-[12px]">
                {user.name} (Google)
              </p>
            </div>
          </div>
        </div>

        <div className="ml-[199px] mt-[42px]">
          <h1 className="text-start font-bold">Your Information </h1>
          <div className="card w-[556px] h-min-content rounded-[5px] mt-[24px]">
            <h1 className="ml-[32px] text-start tetx-[12px] mt-[16px] font-bold">
              Contact’s name
            </h1>
            <input
              value={user.name}
              onChange={(e) => handle(e)}
              name="name"
              id="name"
              className="border-2 border-[#dedede] w-[350px] pl-3 h-[30px] ml-[32px] rounded-[5px] mt-[4px] placeholder:text-[12px]"
            />
            <div className="flex gap-[120px]">
              <input
                value={user.phone}
                onChange={(e) => handle(e)}
                name="phone"
                id="phone"
                className="border-2 border-[#dedede] w-[145px] pl-3 h-[30px] ml-[32px] rounded-[5px] mt-[25px]"
              />
              <input
                value={user.email}
                onChange={(e) => handle(e)}
                name="email"
                id="email"
                className="pl-3 border-2 border-[#dedede] w-[207px] h-[30px] mr-[113px] rounded-[5px] mt-[25px]"
              />
            </div>
            <p className="ml-[10px] text-[8px] mt-[6px] text-[#939393]">
              e.g.: example@gmail.com
            </p>
            <div className="flex gap-5 ml-[32px] mt-[25px]">
              <span className="flex flex-col">
                <label for="check_in" className="mr-2 font-bold text-start">
                  Check In
                </label>
                <input
                  value={data.check_in}
                  onChange={(e) => handleData(e)}
                  name="check_in"
                  id="check_in"
                  type="date"
                  className="pl-3 border-2 border-[#dedede] w-[207px] h-[30px] rounded-[5px] mt-[25px]"
                />
              </span>
              <span className="flex flex-col">
                <label for="check_in" className="mr-2 font-bold text-start">
                  Check Out
                </label>
                <input
                  value={data.check_out}
                  onChange={(e) => handleData(e)}
                  name="check_out"
                  id="check_out"
                  type="date"
                  className="pl-3 border-2 border-[#dedede] w-[207px] h-[30px] mr-[113px] rounded-[5px] mt-[25px]"
                />
              </span>
            </div>
            <div className="flex flex-col ml-[32px] mt-[25px]">
              <label for="check_in" className="mr-2 font-bold text-start">
                  Duration (Days)
                </label>
                <input
                  value={data.duration}
                  onChange={(e) => handleData(e)}
                  name="duration"
                  id="duration"
                  type="number"
                  className="pl-3 border-2 border-[#dedede] w-[207px] h-[30px] mr-[113px] rounded-[5px] mt-[25px]"
                />
            </div>
            <div className="card w-[555px] h-[39px] rounded-[0px] mt-[21px] bg-[#f4f4f4]">
              <div className="flex justify-center items-center">
                <input
                  type="radio"
                  value="iamguest"
                  name="guest"
                  id="guest"
                  className=""
                />
                <label for="guest" className="ml-[10px]">
                  I am the guest
                </label>
                <input
                  type="radio"
                  value="another"
                  name="guest"
                  id="another"
                  className="ml-[50px]"
                />
                <label for="another" className="ml-[10px]">
                  I am booking for another person
                </label>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-start ml-[199px] mt-[42px] font-bold">
          Special Request
        </h1>

        <div className="card w-[556px] h-[274px]  ml-[199px] mt-[42px] rounded-[5px]">
          <div className="card h-[39px] rounded-[1px] bg-[#f4f4f4]">
            <p className="text-[10px] font-bold">
              Have a special request? Ask, and the property will do its best to
              meet your wish. (Note that special request are not quaranteed and
              may incur charges)
            </p>
          </div>
          <div className="flex justify-between font-bold text-[12px]">
            <div className="mt-[54px] ml-[38px] ">
              <div className="flex">
                <input
                  type="checkbox"
                  value="iamguest"
                  name="guest"
                  id="guest"
                  className=""
                />
                <label for="guest" className="ml-[10px]">
                  Non-smoking Room
                </label>
              </div>
              <div className="flex mt-[40px]">
                <input
                  type="checkbox"
                  value="iamguest"
                  name="guest"
                  id="guest"
                  className=""
                />
                <label for="guest" className="ml-[10px]">
                  Check-in Time
                </label>
              </div>
              <div className="flex mt-[40px]">
                <input
                  type="checkbox"
                  value="iamguest"
                  name="guest"
                  id="guest"
                  className=""
                />
                <label for="guest" className="ml-[10px]">
                  Others
                </label>
              </div>
            </div>
            <div className="mt-[54px] mr-[139px]">
              <div className="flex">
                <input
                  type="checkbox"
                  value="iamguest"
                  name="guest"
                  id="guest"
                  className=""
                />
                <label for="guest" className="ml-[10px]">
                  Connection Room
                </label>
              </div>
              <div className="flex mt-[40px]">
                <input
                  type="checkbox"
                  value="iamguest"
                  name="guest"
                  id="guest"
                  className=""
                />
                <label for="guest" className="ml-[10px]">
                  Check-out Time
                </label>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-start ml-[199px] mt-[42px] font-bold">
          Cancellation Policy
        </h1>

        <div className=" card w-[556px] h-[84px] ml-[199px] mt-[42px] rounded-[5px]">
          <h1 className="ml-[32px] text-[12px] mt-[10px] flex items-center font-bold">
            Non-refundable
          </h1>
          <div className=" card w-[555px] h-[42px] rounded-[1px] mt-[16px]">
            <h1 className="ml-[32px] text-start text-[10px] mt-[10px] font-bold">
              This reservation is non-refundable
            </h1>
          </div>
        </div>

        <h1 className="text-start ml-[199px] mt-[42px] font-bold">
          Add-ons for Your Stay
        </h1>

        <div className="card w-[556px] h-[300px] ml-[199px] mt-[42px] rounded-[5px]">
          <div className="card w-[556px] h-[77px] rounded-[1px]">
            <div className="flex mt-[11px] ml-[38px]">
              <input
                type="checkbox"
                value="Yes"
                name="covid"
                id="covid"
                checked={data.covid}
                onChange={(e) => handleChange(e)}
              />
              <label for="covid" className="ml-[10px] font-bold text-[12px]">
                Hotel COVID-19 Insurance
              </label>
            </div>
            <p className="text-[10px] ml-[38px] text-justify text-[#939393]">
              Get a comprehensive COVID-19 protections that cover
              hospitalization, medical check up
              <br /> fee (including Rapid or PCR Swab Test), and many more.
            </p>
          </div>
          <div className="flex justify-between pt-[13px]">
            <div>
              <div className="flex justify-between pt-[13px] ml-[44px]">
                <BsCheck className="text-[20px] text-success" />
                <p className="text-[12px] ml-[8px] text-[#939393]">
                  Coverage of up to Rp 2.000.000 for hospitalization due to
                  COVID-19
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <div className="flex justify-between pt-[13px] ml-[44px]">
                <BsCheck className="text-[20px] text-success" />
                <p className="text-[12px] ml-[8px] text-[#939393]">
                  Coverage of up to Rp 500.000 for for medical check up fee
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <div className="flex justify-between pt-[13px] ml-[44px]">
                <BsCheck className="text-[20px] text-success" />
                <p className="text-[12px] ml-[8px] text-[#939393]">
                  Coverage of up to Rp 10.000.000 for death due to COVID-19
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <div className="flex justify-between pt-[13px] ml-[44px]">
                <BsCheck className="text-[20px] text-success" />
                <p className="text-[12px] ml-[8px] text-[#939393]">
                  Coverage of up to Rp 500.000 for income loss due to COVID-19
                </p>
              </div>
            </div>
          </div>
          <div className="card w-[556px] h-[50px] mt-[50px] rounded-[5px]">
            <h1 className="font-bold text-end pt-[14px] mr-[38px] text-[12px]">
              Rp 31.000
            </h1>
          </div>
        </div>
        <h1 className="text-start ml-[199px] mt-[42px] font-bold">
          Price Detail
        </h1>
        <div className="card w-[556px] h-[172px] ml-[199px] mt-[42px] rounded-[1px]">
          <div className="card w-[555px] h-[42px] rounded-[1px]">
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
              <h1 className=" mr-[38px] mt-[14px] text-[12px]">Rp {price}</h1>
            </div>
          </div>
          <div className="card w-[556px] h-[50px] mt-[50px] rounded-[5px]">
            <h1 className="font-bold text-end pt-[14px] pr-[38px] text-[12px]">
              Rp {price}
            </h1>
          </div>
        </div>

        <div className="">
          <button className="btn bg-[#1788FB] text-white mt-[28px] border-none mr-[90px] w-[160px] h-[40px] text-[10px] hover:bg-[#419EFD]" onClick={submit}>
            {" "}
            Continue to Review
          </button>
        </div>
        <br />
        <Footer />
      </div>
    </div>
  );
}
