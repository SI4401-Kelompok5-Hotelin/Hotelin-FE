import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Mulia from "../../asset/mulia.jpg";
import { MdOutlineCoffeeMaker } from "react-icons/md";
import { BiDrink } from "react-icons/bi";
import { MdMonitor } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import { BsSafe } from "react-icons/bs";
import { MdOutlineAir } from "react-icons/md";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { MdOutlineRestaurant } from "react-icons/md";
import { RiBilliardsLine } from "react-icons/ri";
import { FaSwimmingPool } from "react-icons/fa";
import { FaParking } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import axios from "axios";

import Footer from "../footer";

export default function Hotel() {
  const [data, setData] = useState([]);
  const [room, setRoom] = useState([]);
  const id = useParams();
  const newId = String(id["id"]);
  localStorage.setItem("hotelid", data.id);
  localStorage.setItem("hotelname", data.name);

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_API_ENDPOINT + `/hotels/details?id=${newId}`
      )
      .then((res) => {
        setData(res.data.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_ENDPOINT + `/rooms?id=${newId}`, {
        headers: { Authorization: `${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setRoom(res.data.data);
      });
  }, []);

  return (
    <div>
      <div className="min-h-screen min-w-screen ">
        <div className="flex flex-col lg:flex-row-reverse lg:justify-between">
          <img src={Mulia} className="w-[1000px]"></img>
          <div>
            <h1 className="text-[76px] font-bold text-left pl-[88px] pt-[108px] ">
              {" "}
              {data.name}
            </h1>
            <div class="flex gap-0.5 -ml-1 pl-[88px] pt-[4px]">
              <h1 className="font-semibold text-[25px]">{data.rating}</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-[30px] h-[30px] text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p className="py-6 pl-[88px] pt-[10px] text-start">
              Hotel berkelas yang terbaik untuk anda nikmati, dengan pelayanan
              terbaik. Kami siap memberikan pelayanan terbaik untuk anda
            </p>
            <h1 className="text-end font-bold text-sky-500 text-[30px] mt-9 mr-10">
              Booking sekarang dan
              <br />
              dapatkan harga
              <br />
              terbaik
            </h1>
          </div>
        </div>
      </div>

      <div className="absolute mt-[-250px] ">
        <div className="card shadow h-[169px]  w-[1086px] mx-52 rounded-[10px] bg-[#1788FB]">
          <div className="">
            <div className="py-auto max-w-4xl flex items-center">
              <h1 className="  text-start pl-8 mb-4 text-lg font-bold text-white pt-[69px] text-[25px]">
                Fasilitas
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[80px]">
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
            <h2 class="text-gray-800 text-2xl lg:text-[40px] font-bold text-center mb-4 md:mb-8 xl:mb-12 pt-14">
              Tentang Kami
            </h2>
            <p className="mb-5 text-[20px] pt-1">
              Hotel Kami menampilkan kamar-kamar luas yang
              memancarkan suasana elegan, lengkap dengan keramahan hangat khas
              Indonesia. The Suites di Hotel Kami membanggakan
              suite mewah serta butler Anda sendiri, siap memenuhi setiap
              kebutuhan Anda. Kedua pengalaman menjanjikan tingkat layanan yang
              melampaui dan melampaui, mendefinisikan kembali kemewahan di
              setiap langkah. Hotel pemenang penghargaan ini memiliki
              serangkaian fasilitas premium untuk memuaskan setiap tamu. Cicipi
              masakan Indonesia, Asia, dan Kontinental terbaik di salah satu
              dari sembilan restoran dan bar di hotel. Manjakan diri Anda dalam
              keadaan bahagia di tempat Spa atau tingkatkan energi Anda di Pusat
              Kebugaran luas yang menghadap ke view yang sangat bagus.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[-40px]">
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
            <h2 class="text-gray-800 text-2xl lg:text-[40px] font-bold text-center mb-4 md:mb-8 xl:mb-12 pt-14">
              Kamar Kami
            </h2>
          </div>
        </div>
      </div>
      {room.map((item, index) => {
        return (
          <div
            key={index}
            className="card lg:card-side bg-base-100 shadow-xl mx-32 rounded-[1px] mt-[20px] bg-[#efefef]"
          >
            <figure>
              <img src={Mulia} className="w-[544px] h-[580px] "></img>
            </figure>
            <div className="card-body w-[910px]">
              <h2 className="font-bold text-[35px] pt-[34px] text-justify">
                {item.name}
              </h2>
              <p className="text-[20px]"> {item.description}</p>
              <div className="flex justify-between">
                <div>
                  <h2 className="font-bold text-[35px] text-justify underline">
                    Fasilitas
                  </h2>
                  <div className="flex justify-between pt-[10px]">
                    <MdOutlineCoffeeMaker className="text-[30px]" />
                    <p className="text-[20px]">Pembuat kopi/teh</p>
                  </div>
                  <div className="flex justify-between pt-[10px]">
                    <BiDrink className="text-[30px]" />
                    <p className="text-[20px] mr-[85px]">Mini Bar</p>
                  </div>
                  <div className="flex justify-between pt-[10px]">
                    <MdMonitor className="text-[30px] " />
                    <p className="text-[20px] mr-[85px]">TV Kabel</p>
                  </div>
                  <div className="flex justify-between pt-[10px]">
                    <AiOutlineWifi className="text-[30px]" />
                    <p className="text-[20px] mr-[120px]">WiFi</p>
                  </div>
                  <div className="flex justify-between pt-[10px]">
                    <BsSafe className="text-[30px]" />
                    <p className="text-[20px] mr-[65px]">Berangkas</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-end font-bold text-[35px]">Price</h2>
                  <p className="font-bold text-[35px] pt-[10px]">
                    IDR {item.price}
                  </p>
                  <p className="text-end font-bold ">Per Malam</p>
                  <p className="text-[#1788FB] font-bold text-end pt-[15px]">
                    Termasuk Pajak dan Biaya
                  </p>
                  <Link to={`/data/${item.id}/${item.price}`}>
                    <button className="btn bg-[#1788FB] border-none hover:bg-[#1788FB] hover:text-white mt-[32px]">
                      Pesan Sekarang
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <br></br>
      <div className="mt-[-40px]">
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
            <h2 class="text-gray-800 text-2xl lg:text-[40px] font-bold text-center mb-4 md:mb-8 xl:mb-12 pt-14 underline">
              Fasilitas
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex w-[184px] h-[124px] m-8 rounded-[5px]">
          <MdOutlineAir className="text-[70px] text-[#939393]" />
          <p className="py-4 ml-[30px] text-[20px]">AC</p>
        </div>
        <div className=" flex w-[184px] h-[124px] m-8 rounded-[5px]">
          <AiOutlineWifi className="text-[70px] text-[#939393]" />
          <p className="py-4 ml-[30px] text-[20px]">WiFi</p>
        </div>
        <div className=" flex w-[184px] h-[124px] m-8 rounded-[5px]">
          <CgSmartHomeRefrigerator className="text-[70px] ml-[25px] text-[#939393]" />
          <p className="py-4 ml-[30px] text-[20px]">Kulkas</p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex w-[184px] h-[124px] m-8 ">
          <MdOutlineRestaurant className="text-[70px] text-[#939393]" />
          <p className="py-4 ml-[30px] text-[20px]">Restoran</p>
        </div>
        <div className=" flex w-[184px] h-[124px] m-8 ">
          <RiBilliardsLine className="text-[70px] text-[#939393]" />
          <p className="py-4 ml-[30px] text-[20px]">Billiard</p>
        </div>
        <div className=" flex w-[184px] h-[124px] m-8 ">
          <FaSwimmingPool className="text-[70px] ml-[25px] text-[#939393]" />
          <p className="py-4 ml-[30px] text-[20px]">Kolam Renang</p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex w-[184px] h-[124px] m-8 rounded-[5px]">
          <FaParking className="text-[70px] text-[#939393]" />
          <p className="py-4 ml-[30px] text-[20px]">Parkir Gratis</p>
        </div>
      </div>

      <div className="mt-[-40px]">
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
            <h2 class="text-gray-800 text-2xl lg:text-[40px] font-bold text-center mb-4 md:mb-8 xl:mb-12 pt-14 underline">
              Ulasan
            </h2>
          </div>
        </div>
      </div>
      <div className="mt-[-40px]">
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
            <h2 class="text-gray-800 text-2xl lg:text-[40px] font-bold text-center mb-4 md:mb-8 xl:mb-12 pt-14 underline">
              Kontak Kami
            </h2>
          </div>
        </div>
      </div>

      <div className="flex justify-content pb-20">
        <div className="">
          <iframe
            src="https://maps.google.com/maps?q=hotel%20mulia&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-[500px] h-[500px] ml-[120px]"
          />
        </div>
        <div className="mt-[135px]">
          <div className=" flex py-4">
            <BsTelephone className="text-[40px] text-[#939393] ml-[210px]" />
            <p className="text-[20px] ml-[10px]">{data.phone}</p>
          </div>
          <div className=" flex py-4">
            <BsWhatsapp className="text-[40px] text-[#939393] ml-[210px]" />
            <p className="text-[20px] ml-[10px]">{data.phone}</p>
          </div>
          <div className=" flex py-4">
            <HiOutlineMail className="text-[40px] text-[#939393] ml-[210px]" />
            <p className="text-[20px] ml-[10px]">{data.email}</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
