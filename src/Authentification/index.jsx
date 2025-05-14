import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "../prac/login";
import RegisterPage from "./register";
import LoginRegister from "./LoginRegister";

const Authentification = () => {
    return (
        <div className="auth-container">
            {/*<button>
                <Link to={Login} className="login" >
                  <Login /> 
                </Link>
            </button>*/}
            <button>
               <Link to={LoginRegister} className="LoginRegister" > 
                <LoginRegister />
               </Link>
            </button>
        </div>
    );  
}
export default Authentification;