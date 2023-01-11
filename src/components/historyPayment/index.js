import React, { useEffect, useState } from 'react'
import hotelkecil from '../../asset/hotelkecil.png'
import axios from 'axios';
import Ulasan from '../ulasan';

export default function HistoryPayment() {
    const [data, setData] = useState([]);
    const url = process.env.REACT_APP_API_ENDPOINT + "/booking";

    useEffect(() => {
      axios
        .get(url, {
          headers: { Authorization: `${localStorage.getItem("token")}` },
        })
        .then((res) => {
          setData(res.data.data);
        });
    }, []);

  return (
    <div className="flex justify-center pb-32">
      <div>
        <h1 className="text-[25px] font-semibold mt-[140px]">
          History Transaction
        </h1>
        <div className="justify-center flex flex-col mt-[60px] gap-5">
          {data.map((item, index) => {
            return (
              <div
                className="w-[1266px] h-[320px] bg-[#f4f4f4] rounded-lg flex justify-between p-3"
                key={index}
              >
                <div className="flex w-max-content">
                  <img src={hotelkecil} className="ml-3" alt="hotel" />
                  <div className="items-start justify-start flex-col ml-[25px] flex">
                    <h1 className="font-bold text-[25px] text-start">
                      {item.check_in} sampai {item.check_out}
                    </h1>
                    <h1 className="font-medium text-[25px] ">
                      {item.hotel_name}
                    </h1>
                    <h1 className="font-bold text-[25px] mt-3">
                      {item.room_name}
                    </h1>
                    <Ulasan hotelid={item.hotel_id} />
                  </div>
                </div>
                <h1 className="text-[#91C60B] font-semibold text-[25px]">
                  IDR. {item.total_price}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
