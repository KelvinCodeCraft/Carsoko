import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import RegisterPage from "./register";
import LoginPage from "./LoginPage";

const Authentification = () => {
    return (
        <div className="auth-container">
            <nav>
                <button to="/register" className="registerPage">
                    Register
                </button>
                <button to="/login" className="loginPage">
                    Login
                </button>
            </nav>
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    );
};

export default Authentification;