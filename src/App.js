import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import LoginForm from "./components/loginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Regsiter";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Payment from "./components/payment";
import Datapemesanan from "./pages/Datapemesanan";
import Profile from "./pages/Profile";
import HistoryBooking from "./pages/HistoryBooking";
import DashboardAdmin from "./pages/DashboardAdmin";


function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<Home />} />
            <Route path="/hotel/1" element={<Detail />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/data" element={<Datapemesanan />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/history" element={<HistoryBooking />} />
            <Route path="/admin" element={<DashboardAdmin />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
