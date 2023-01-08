import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from '@chakra-ui/react';

export default function TotalHotel() {
  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(false);
  const url = process.env.REACT_APP_API_ENDPOINT + "/admin/hotel";

  useEffect(() => {
    axios
      .get(url, {
        headers: { Authorization: `${localStorage.getItem("token")}` },
      })
      .then((res) => {
        const dataNew = Object.keys(res.data.data).length;
        setData(dataNew)
        console.log(res);
        isLoading(false)
      });
  }, []);


  return (
    <div className="lg:w-[321px] w-[200px] lg:mt-[13px] shadow-lg h-[196px] bg-white ml-[30px] rounded mt-5 flex flex-col items-center justify-center">
      {loading ? <Spinner />
      :
      <>
        <h1 className="text-[31px] text-Primary-Normal font-bold">{data}</h1>
        <p className="font-medium text-[20px] text-center text-Greyscale-Normal">
          Total Hotel <br /> yang tersedia
        </p>
      </>
      }
    </div>
  );
}
