import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";

export default function Ulasan(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ulasan, setUlasan] = useState({
    "hotel_id": props.hotelid,
    "ulasan": "",
  });
  const navigate = useNavigate();
  const toast = useToast();
  const url2 = process.env.REACT_APP_API_ENDPOINT + "/review/create";

  function submit(e) {
    e.preventDefault();
    axios
      .post(url2, ulasan, {
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
          navigate("/history");
          toast({
            title: "Review has been submitted",
            description: "Your review for this hotel has been submitted.",
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top-right",
          });
        }
      });
  }

  function handle(e) {
    const newData = { ...ulasan };
    newData[e.target.id] = e.target.value;
    setUlasan(newData);
    console.log(newData);
  }
  return (
    <div>
      <Button mt={8} onClick={onOpen} color={"blue.500"}>
        Berikan Ulasan
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1 className="font-bold text-[25px]">Berikan Ulasan mu</h1>
            <input
              value={ulasan.ulasan}
              name="ulasan"
              id="ulasan"
              type="text"
              onChange={(e) => handle(e)}
              className="w-[400px] h-[40px] border-2 pl-3 mt-3 rounded-lg"
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={submit}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
