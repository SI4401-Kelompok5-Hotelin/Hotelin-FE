import React from "react";
import "./App.css";
// import Header from "./components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
// import Banner from "./components/banner";
// import Rating from "./components/recomendation";
// import Footer from "./components/footer";
// import Card from "./components/card";
import LoginForm from "./components/loginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/" element="HOME" />
          </Routes>
        </BrowserRouter>
        {/* <Header />
        <Banner />
        <Card />
        <Rating />
        <Footer /> */}
      </ChakraProvider>
    </div>
  );
}

export default App;
