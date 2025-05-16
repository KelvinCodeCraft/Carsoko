import React, { useState } from "react";
import './navbar.css'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'

const Navbar = ({theme, setTheme}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleThemeToggle = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        // Example: call a prop or context function to filter items
        // onSearch(searchTerm);
        alert(`Searching for: ${searchTerm}`);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return(
        <div className="navbar">
            <nav>
                <ul>
                    <li>CARSOKO</li>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Features</li>
                    <li>About</li>
                </ul>
            </nav>

            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <img
                    src={theme === "light" ? search_icon_light : search_icon_dark}
                    alt="search"
                    onClick={handleSearch}
                />
            </div>   
        </div>
    )
}

export default Navbar;