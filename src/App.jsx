import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Qr from "./pages/Qr";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/qr" element={<Qr />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
