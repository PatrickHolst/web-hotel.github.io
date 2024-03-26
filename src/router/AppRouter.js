import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Header from "../components/Header";
import "../index.css";
import Booking from "../components/Booking";
import ExtraServices from "../components/ExtraServices";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="book" element={<Booking />} />
            <Route path="extra" element={<ExtraServices />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default AppRouter;
