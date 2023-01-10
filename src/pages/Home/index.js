import React from "react";
import Banner from "../../components/banner";
import CardHotel from "../../components/card";
import CustomerService from "../../components/CustomerService";
import Footer from "../../components/footer";
import Header from "../../components/Navbar";
import Iklan from "../../components/promo";
import Rating from "../../components/recomendation";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <CardHotel />
      <Iklan />
      <Rating />
      <CustomerService />
      <Footer />
    </div>
  );
}
