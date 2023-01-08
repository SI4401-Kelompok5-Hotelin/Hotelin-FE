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
import Topupsaldo from "./components/topup";
import ListHotel from "./pages/ListHotel";
import Addhotel from "./pages/AddHotel";
import Detailhotel from "./pages/DetailHotel";
import RequireAuth from "./Hooks/RequireAuth";


function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<Home />} />
            <Route exact path="/" element={<RequireAuth />}>
              <Route path="/hotel/1" element={<Detail />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/data" element={<Datapemesanan />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/history" element={<HistoryBooking />} />
              <Route path="/admin" element={<DashboardAdmin />} />
              <Route path="/topup" element={<Topupsaldo />} />
              <Route path="/listhotel" element={<ListHotel />} />
              <Route path="/addhotel" element={<Addhotel />} />
              <Route path="/hotel/detail/:id" element={<Detailhotel />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
