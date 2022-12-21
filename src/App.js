import React from "react";
import "./App.css";
// import Header from "./components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
// import Banner from "./components/banner";
// import Rating from "./components/recomendation";
// import Footer from "./components/footer";
// import Card from "./components/card";
import LoginForm from "./components/loginForm";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        {/* <Header />
        <Banner />
        <Card />
        <Rating />
        <Footer /> */}
        <LoginForm />
      </ChakraProvider>
    </div>
  );
}

export default App;
