import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import logo from "../../assets/images/logo.jpg";

function Header() {
  return (
    <header id="header">
      <Link to="/">
        <img src={logo} alt="little lemon logo" width="150px"></img>
      </Link>
      <Nav />
    </header>
  );
}

export default Header;
