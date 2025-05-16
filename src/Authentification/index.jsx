import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import RegisterPage from "./register";
import LoginPage from "./LoginPage";

const Authentification = () => {
    return (
        <div className="auth-container">
            <nav>
                <Link to="/register" className="registerPage">
                    Register
                </Link>
                < Link to="/login" className="loginPage">
                    Login
                </Link>

            </nav>
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    );
};

export default Authentification;