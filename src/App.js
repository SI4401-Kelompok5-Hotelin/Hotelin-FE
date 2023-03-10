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
import ReviewBooking from "./components/review";
import ListHotel from "./pages/ListHotel";
import Addhotel from "./pages/AddHotel";
import Detailhotel from "./pages/DetailHotel";
import RequireAuth from "./Hooks/RequireAuth";
import Page404 from "./pages/404Page";


function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<Home />} />
            <Route path="/review" element={<ReviewBooking />} />
            {/* <Route
              path="/customerservice"
              element
              {...Redirect}
              loc="wa.me/6285171110520"
            /> */}
            {/* <Route
              path="/customerservice"
              element={() => {
                window.location.href = "wa.me/6285171110520";
                return null;
              }}
            /> */}
            <Route exact path="/" element={<RequireAuth />}>
              <Route path="/hotel/:id" element={<Detail />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/data/:id/:price" element={<Datapemesanan />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/history" element={<HistoryBooking />} />
              <Route path="/admin" element={<DashboardAdmin />} />
              <Route path="/topup" element={<Topupsaldo />} />
              <Route path="/listhotel" element={<ListHotel />} />
              <Route path="/addhotel" element={<Addhotel />} />
              <Route path="/hotel/detail/:id" element={<Detailhotel />} />
            </Route>
            <Route path="/*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
