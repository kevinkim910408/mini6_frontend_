import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import Signup from "../../Pages/Signup";

const Routing = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route />
      <Route />
      <Route />
      <Route />
      <Route />
      <Route />
    </Routes>
  );
};

export default Routing;
