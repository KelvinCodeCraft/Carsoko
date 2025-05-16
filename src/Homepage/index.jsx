import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Homepage/navbar/navbar";
import Body from "./body/body";
import footer from "./footer/footer";

const Homepage = () => {
    return (
        <div className="homepage-container">
            <Navbar />
            <Routes>
                <Route path="/" element={<Body />} />
            </Routes>
            <footer />
        </div>
    );
}

export default Homepage;