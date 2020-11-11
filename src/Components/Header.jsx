import React from "react";
import Logo from "../Image/covid-19d.jpg";

const Header = () => {
  return (
    <>
      <nav className="nav_item">
        <span>
          <img src={Logo} alt="COVID-19" width="250" height="90"  />
        </span>
       
      </nav>
     
    </>
  );
};

export default Header;
