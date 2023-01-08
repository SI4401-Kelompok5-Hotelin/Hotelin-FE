import React from "react";
import Rajaampat from "../../asset/rajawampat.jpg";
export default function Banner() {
  return (
    <div
      className=" hero h-[454px]  flex justify-start w-[1263px] mx-auto rounded-[20px]"
      style={{ backgroundImage: `url(${Rajaampat})` }}
    >
      <div className="hero-content text-left text-neutral-content">
        <div className="max-w-4xl px-10">
          <h1 className="mb-4 text-6xl font-bold ">
            Cari Hotel Sambil rebahan? di Hotelin aja!
          </h1>
          <p className="mb-5 text-xl pt-10">
            Cari hotel bisa lebih mudah, bisa dimanapun dan kapanpun.
          </p>
        </div>
      </div>
    </div>
  );
}
