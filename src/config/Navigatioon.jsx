import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home"
import AboutUs from "../components/AboutUs"
import Login from "../components/Login"
import Products from "../components/Products"



function Navigation() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/aboutus" element={<AboutUs />} ></Route>
                <Route path="/login" element={<Login />} ></Route>
                <Route path="/products" element={<Products />} ></Route>

            </Routes>
        </>
    )
}

export default Navigation