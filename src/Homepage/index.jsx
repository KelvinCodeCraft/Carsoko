import React, { useState } from "react";
import Navbar from "./navbar/navbar";
import Body from "./body/body";
import Footer from "./footer/footer";

const Homepage = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`homepage ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Body />
      <Footer />
    </div>
  );
};

export default Homepage;