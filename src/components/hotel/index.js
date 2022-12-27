import React from "react";
import Mulia from "../../asset/mulia.jpg";
import { MdOutlineCoffeeMaker } from "react-icons/md";
import { BiDrink } from "react-icons/bi";
import { MdMonitor } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import { BsSafe } from "react-icons/bs";
import Footer from "../footer";

export default function Hotel() {
  return (
    <div>
      <div className="min-h-screen min-w-screen ">
        <div className="flex flex-col lg:flex-row-reverse">
          <img src={Mulia} className="w-[1000px]"></img>
          <div>
            <h1 className="text-[76px] text-left pl-[88px] pt-[108px] ">
              Hotel
            </h1>
            <h1 className="text-[76px] font-bold text-left pl-[88px] ">
              {" "}
              Mulia Senayan
            </h1>
            <div class="flex gap-0.5 -ml-1 pl-[88px] pt-[4px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p className="py-6 pl-[88px] pt-[10px]">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
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
              Hotel Mulia Senayan, Jakarta menampilkan kamar-kamar luas yang
              memancarkan suasana elegan, lengkap dengan keramahan hangat khas
              Indonesia. The Suites di Hotel Mulia Senayan, Jakarta membanggakan
              suite mewah serta butler Anda sendiri, siap memenuhi setiap
              kebutuhan Anda. Kedua pengalaman menjanjikan tingkat layanan yang
              melampaui dan melampaui, mendefinisikan kembali kemewahan di
              setiap langkah. Hotel pemenang penghargaan ini memiliki
              serangkaian fasilitas premium untuk memuaskan setiap tamu. Cicipi
              masakan Indonesia, Asia, dan Kontinental terbaik di salah satu
              dari sembilan restoran dan bar di hotel. Manjakan diri Anda dalam
              keadaan bahagia di Mulia Spa atau tingkatkan energi Anda di Pusat
              Kebugaran luas yang menghadap ke Jakarta.
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

      <div className="card lg:card-side bg-base-100 shadow-xl mx-32 rounded-[1px] bg-[#efefef]">
        <figure>
          <img src={Mulia} className="w-[544px] h-[580px] "></img>
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-[35px] pt-[34px] text-justify">
            Splendor City View
          </h2>
          <p className="text-[20px]">
            {" "}
            The Mulia Splendor rooms at our Jakarta luxury hotel encompasses{" "}
            <br /> 48m2 and provides a tranquil retreat with enchanting views
            and <br /> high-tech comforts. Fitted with a rain shower and a
            bath-tub in the
            <br /> spacious bathroom to help you unwind. Relax on the couch and
            enjoy <br />
            your favourite programme on the 48-inch High Definition LED TV or
            <br /> check emails at the spacious desk with high speed Internet
            access.
          </p>
          <div className="flex justify-between">
            <div>
              <h2 className="font-bold text-[35px] text-justify underline">
                Room Amenities
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
                <p className="text-[20px] mr-[70px]">Berangkas</p>
              </div>
            </div>
            <div>
              <h2 className="text-end font-bold text-[35px]">
                Price
              </h2>
              <p className="font-bold text-[35px] pt-[10px]">IDR 2,000,000</p>
              <p className="text-end font-bold ">Per Malam</p>
              <p className="text-[#1788FB] font-bold text-end pt-[15px]">
                Termasuk Pajak dan Biaya
              </p>
              <div className="card-actions justify-end pt-[30px]">
                <button className="btn bg-[#1788FB]">Pesan Sekarang</button>
              </div>
            </div>
          </div>

          
        </div>
      </div>
      <br></br>
      
      <Footer />
    </div>
  );
}
