import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Rating() {

  // data = [
  //   {
  //     judul: "Hotel Senayan",
  //     desc: "awmdkwamdkmwakdmkawmdkawmdk",
  //     img: "https://placeimg.com/400/225/arch",
  //   },
  //   {
  //     judul: "Hotel Melati",
  //     desc: "awmdkwamdkmwakdmkawmdkawmdk",
  //     img: "https://placeimg.com/400/225/arch",
  //   },
  //   {
  //     judul: "Hotel In",
  //     desc: "awmdkwamdkmwakdmkawmdkawmdk",
  //     img: "https://placeimg.com/400/225/arch",
  //   },
  // ];
  const url = process.env.REACT_APP_API_ENDPOINT + "/hotels";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url, {
        headers: { Authorization: `${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setData(res.data.data);
        console.log(res);
      });
  }, []);

  return (
    <div className="mt-[80px]">
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
          <h2 class="text-gray-800 text-2xl lg:text-[40px] font-bold text-center mb-4 md:mb-8 xl:mb-12 pt-14">
            Rekomendasi Hotel Untukmu
          </h2>
          <p className="mb-5 text-[31px] pt-1">
            Berikut merupakan hotel dengan rating tertinggi.
          </p>
          <div className="flex gap-9 min-w-screen">
            {data.slice(0,3).map((item, index) => {
              return (
                <div className="card w-96 bg-base-100 shadow-xl" key={index}>
                  <figure className="px-10 pt-10">
                    <img
                      src="https://placeimg.com/400/225/arch"
                      alt="Hotel"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{item.name}</h2>
                    <p>{item.address}</p>
                    <div className="card-actions mt-2">
                      <Link to={`/hotel/${item.id}`}>
                        <button className="btn btn-primary">Book Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
