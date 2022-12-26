import React from 'react';
import Banner from '../../components/banner';
import CardHotel from '../../components/card';
import Footer from '../../components/footer';
import Header from '../../components/Navbar';

export default function Home() {
  return (
    <>
        <Header />
        <Banner />
        <CardHotel />
        <Footer />
    </>
  )
}
