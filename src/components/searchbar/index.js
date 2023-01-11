import React, { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SearchBar() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_ENDPOINT + "/hotels")
      .then((res) => {
        setData([...res.data.data]);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="containerTable">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative flex justify-center">
          <div className="absolute inset-y-0 left-0 flex items-center pl-9 pointer-events-none">
            <HiSearch className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-[1030px] pl-8 h-[60px] text-sm text-gray-900 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cari Hotel..."
            value={wordEntered}
            onChange={handleFilter}
            required
          />
          <button className="text-white absolute right-9 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {filteredData.length === 0 ? (
              "Search"
            ) : (
              <AiOutlineClose className="w-5 h-5" onClick={clearInput} />
            )}
          </button>
        </div>
        {filteredData.length !== 0 && (
          <div className="absolute z-10 bg-white w-[1030px] pl-3 shadow-lg ml-7 rounded-md containerTable">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <Link to={`/hotel/${value.id}`}>
                  <p className="my-5 text-xl font-medium rounded" key={key}>
                    {value.name}
                  </p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
