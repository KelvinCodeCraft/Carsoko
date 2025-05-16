import React from "react";
import './navbar.css'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'

const Navbar = ({theme, setTheme}) => {

    const handleThemeToggle = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }


    return(
        <div className="navbar">
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Features</li>
                    <li>About</li>
                </ul>
            </nav>

            <div className="search-box">
                <input type="text" placeholder="Search..."/>
                <img src={theme == "light"? search_icon_light : search_icon_dark} alt=""/>
            </div>   
        </div>
    )
}

export default Navbar;