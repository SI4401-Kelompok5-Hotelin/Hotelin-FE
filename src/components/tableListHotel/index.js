import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function TableListHotel() {
  const [data, setData] = useState([]);
  const toast = useToast();
  const url = process.env.REACT_APP_API_ENDPOINT + "/admin/hotel";

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

  const handleDelete = (e) => {
    let id = e.target.value;
    axios
      .delete(
        process.env.REACT_APP_API_ENDPOINT + `/admin/hotel/delete?${id}`,
        {
          headers: { Authorization: `${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        console.log(res);
        window.location.reload();
        toast({
          title: "Hotel deleted",
          description: "We've deleted your hotel.",
          status: "danger",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
      });
  };

  return (
    <div className="mt-5 bg-white border rounded shadow-md lg:ml-10">
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Nama Hotel</Th>
              <Th>Nomor HP</Th>
              <Th>Email</Th>
              <Th>Lokasi</Th>
              <Th>Rating</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              <Tr key={index} value={item.id}>
                <Td></Td>
                <Td>{item.name}</Td>
                <Td>{item.phone}</Td>
                <Td>{item.email}</Td>
                <Td>{item.address}</Td>
                <Td>{item.rating}</Td>
                <Td>
                  {" "}
                  <Link to={`/hotel/detail/${item.id}`}>
                    <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={(e) => handleDelete(e)}
                    value={item.id}
                    className="px-4 py-2 ml-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
