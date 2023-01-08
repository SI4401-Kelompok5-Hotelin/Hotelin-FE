import React, { useState, useEffect } from "react";
import Header from "../Navbar";
import { useNavigate } from "react-router-dom";
import { BiWallet } from "react-icons/bi";
import Mandiri from "../../asset/mandiri.png";
import Bca from "../../asset/bca.png";
import Bni from "../../asset/bni.png";
import Gopay from "../../asset/gopay.png";
import Dana from "../../asset/dana.png";
import Ovo from "../../asset/ovo.png";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  useToast,
} from "@chakra-ui/react";


export default function Topupsaldo() {
  const [num, setNum] = useState(0);
  const [data, setData] = useState(0);
  const navigate = useNavigate();
  const toast = useToast();
  const url = process.env.REACT_APP_API_ENDPOINT + "/balance/topup";
  const url2 = process.env.REACT_APP_API_ENDPOINT + "/balance";
  const [balance, setBalance] = React.useState([
    
  ]);

  useEffect(() => {
    axios
      .get(url2, {
        headers: { Authorization: `${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setBalance(res.data.balance);
      });
  }, []);

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNum(randomNumberInRange(100000, 99999999));
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = parseFloat(e.target.value);
    setData(newData);
    console.log(newData);
  }

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, data, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.message === "Network Error") {
          console.log(res);
          alert("Periksa koneksi internet anda");
        } else {
          console.log(res);
          navigate("/topup");
          toast({
            title: "Top Up Successful",
            description: "We've added balance to your account.",
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top-right",
          });
        }
      });
  }

  return (
    <div>
      <Header />
      <div className="flex justify-center pt-[120px]">
        <BiWallet className="text-[70px]" />
      </div>
      <h1 className="font-bold text-[30px] mt-[20px] text-[#91C60B]">
        Rp {balance}
      </h1>
      <h1 className="font-bold mt-[106px]">Top up via Mobile Banking</h1>

      <div className="flex justify-center">
        <div
          className="card w-[184px] h-[124px] m-8 rounded-[5px]"
          onClick={onOpen}
        >
          <img src={Bca} className="w-[83px] h-[24px] m-12"></img>
        </div>
        <div
          className="card w-[184px] h-[124px] m-8 rounded-[5px]"
          onClick={onOpen}
        >
          <img src={Mandiri} className="w-[83px] h-[24px] m-12"></img>
        </div>
        <div
          className="card w-[184px] h-[124px] m-8 rounded-[5px]"
          onClick={onOpen}
        >
          <img src={Bni} className="w-[83px] h-[30px] m-12"></img>
        </div>
      </div>
      <h1 className="font-bold mt-[57px]">Top up via E-Wallet</h1>

      <div className="flex justify-center">
        <div
          className="card w-[184px] h-[124px] m-8 rounded-[5px]"
          onClick={onOpen}
        >
          <img src={Gopay} className="w-[83px] h-[30px] m-12"></img>
        </div>
        <div
          className="card w-[184px] h-[124px] m-8 rounded-[5px]"
          onClick={onOpen}
        >
          <img src={Dana} className="w-[83px] h-[30px] m-12"></img>
        </div>
        <div
          className="card w-[184px] h-[124px] m-8 rounded-[5px]"
          onClick={onOpen}
        >
          <img src={Ovo} className="w-[83px] h-[30px] m-12"></img>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="my-2 mb-5">
              <h1 className="mb-2 font-bold">Virtual Account</h1>
              <h1 className="mb-2">{num}</h1>
              <h1 className="mb-2 font-bold">Masukkan Nominal TopUp</h1>
              <input
                className="w-[351px] h-[40px] border-2 pl-3 text-black text-[20px]"
                onChange={(e) => handle(e)}
                value={data.balance}
                name="balance"
                id="balance"
                type="number"
              />
            </div>
            <Button onClick={handleClick} mr={3}>
              Generate Virtual Account
            </Button>
            <Button colorScheme="blue" onClick={submit}>Top Up</Button>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
