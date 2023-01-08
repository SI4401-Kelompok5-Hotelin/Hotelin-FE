import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

export default function Detailhotel() {
  const id = useParams();
  const newId = String(id['id']);
  const navigate = useNavigate();
  const toast = useToast();
  const [data, setData] = useState([{}]);

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_ENDPOINT + `/admin/hotel/detail?id=${newId}`, {
        headers: { Authorization: `${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setData(res.data.data);
      });
  }, []);

  function submit(e) {
    e.preventDefault();
    axios
      .put(process.env.REACT_APP_API_ENDPOINT + `/admin/hotel/update?id=${newId}`, data, {
        headers: { Authorization: `${localStorage.getItem("token")}` },
      })
      .then((res) => {
        if (res.message === "Network Error") {
          console.log(res);
          alert("Periksa koneksi internet anda");
        } else {
          console.log(res);
          navigate("/listhotel");
          toast({
            title: "Hotel updated.",
            description: "We've updated your hotel.",
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top-right",
          });
        }
      });
  }
  return (
    <>
      <div className="flex bg-gray-300">
        <Sidebar />
        <div className="lg:ml-[300px] ml-32 min-h-screen min-w-scress">
          <div className="w-[250px] lg:w-full pb-10">
            <div className="">
              <h1 className="mt-10 text-xl font-semibold lg:ml-9">
                Form Tambah Hotel
              </h1>
            </div>

            <div className="block mt-10 lg:flex lg:ml-9">
              <div className="flex flex-col">
                <label className="py-2 text-sm font-semibold text-gray-600">
                  Nama Hotel
                </label>
                <input
                  type="text"
                  id="name"
                  value={data.name}
                  onChange={(e) => handle(e)}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />

                <label className="py-2 text-sm font-semibold text-gray-600">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  value={data.email}
                  onChange={(e) => handle(e)}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />
              </div>
              <div className="flex flex-col lg:ml-10">
                <label className="py-2 text-sm font-semibold text-gray-600">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  value={data.phone}
                  onChange={(e) => handle(e)}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />

                <label className="py-2 text-sm font-semibold text-gray-600">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={data.address}
                  onChange={(e) => handle(e)}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />

                <label className="py-2 text-sm font-semibold text-gray-600">
                  Rating
                </label>
                <input
                  type="text"
                  id="rating"
                  value={data.rating}
                  onChange={(e) => handle(e)}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>
            <button
              onClick={submit}
              className="w-[150px] h-[50px] mt-10 ml-10 bg-sky-500 rounded-lg text-white"
            >
              Change
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
