import React from 'react'
import logowa from '../../asset/logowa.png'

export default function CustomerService() {
  return (
    <>
      <a
        href="https://api.whatsapp.com/send/?phone=6285171110520&text&type=phone_number&app_absent=0"
        className="w-[320px] h-[100px] bg-green-500 rounded-full fixed bottom-20 shadow-lg right-10 flex justify-center items-center p-4"
      >
        <img src={logowa} alt="logowa" className="w-[70px] h-[70px] mr-5" />
        <h1 className="text-white font-bold">
          Chat dengan Customer Service Kami
        </h1>
      </a>
    </>
  );
}
