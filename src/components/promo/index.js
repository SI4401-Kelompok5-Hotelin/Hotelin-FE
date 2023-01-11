import React from "react";

export default function Iklan() {
  return (
    <div className="pt-[300px]">
      <h1 class="text-gray-800 text-2xl lg:text-[40px] font-bold text-center mb-4 md:mb-8 xl:mb-12 pt-14">
        Promo Untuk mu!
      </h1>
      <p className="mb-5 text-[31px] pt-1">
        Berikut merupakan promo yang tersedia.
      </p>
      <div className="carousel mx-32 flex justify-center">
        <div id="item1" className="carousel-item flex justify-center">
          <img
            src="https://www.agoda.com/c/SuperWednesdayID?currency=idr&cid=1881733&platform=mobile"
            className="flex justify-center"
          />
        </div>
        <div id="item2" className="carousel-item flex justify-center">
          <img
            src="https://ik.imagekit.io/tvlk/image/imageResource/2023/01/06/1672993821988-ba1e982769086a9bc7d4d5eaedc94f2f.jpeg?tr=dpr-2,h-230,q-75,w-472"
            className=""
          />
        </div>
        <div id="item3" className="carousel-item flex justify-center">
          <img
            src="https://ik.imagekit.io/tvlk/image/imageResource/2023/01/06/1672974765505-95fdffd6a42e4b3012d6fe120c0762bf.jpeg?tr=dpr-2,h-230,q-75,w-472"
            className=""
          />
        </div>
        <div id="item4" className="carousel-item flex justify-center">
          <img
            src="https://ik.imagekit.io/tvlk/image/imageResource/2023/01/06/1672975050309-b5a4781fb5f6af29673747b901f5364f.png?tr=dpr-2,h-230,q-75,w-472"
            className=""
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-4 mt-8">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
}
