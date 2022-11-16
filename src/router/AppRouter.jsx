import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Navbar from "../components/navbar/Navbar";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import { GlobalStyles } from "../components/globalStyles/GlobalStyles";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <GlobalStyles/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<PrivateRouter />}>
          <Route path="" element={<About/>} />
        </Route>
        <Route path="details" element={<PrivateRouter />}>
          <Route path="" element={<Details/>} />
        </Route>

        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
