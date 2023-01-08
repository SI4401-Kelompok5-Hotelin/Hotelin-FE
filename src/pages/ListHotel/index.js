import React from "react";
import Sidebar from "../../components/Sidebar";
import TableListHotel from "../../components/tableListHotel";

export default function ListHotel() {
  return (
    <div className="flex bg-white">
      <Sidebar />
      <div className="ml-[300px]">
        <TableListHotel />
      </div>
    </div>
  );
}
