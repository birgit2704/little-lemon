import React from "react";
import Nav from "./Nav";
import logo from "../../assets/images/logo.jpg";

function Header() {
  return (
    <header>
      <img src={logo} alt="little lemon logo" width="150px"></img>
      <Nav />
    </header>
  );
}

export default Header;
