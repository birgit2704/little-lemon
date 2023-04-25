import React from "react";
import logo from "../../assets/images/logo.jpg";

function Footer() {
  return (
    <footer>
      <img alt=""></img>
      <ul>
        <li>
          <icon>Social Media 1</icon>
        </li>
        <li>
          <icon>Social Media 2</icon>
        </li>
        <li>
          <icon>Social Media 3</icon>
        </li>
      </ul>
      <address>contact info</address>
      <img alt="logo" src={logo} width="80px" />
    </footer>
  );
}

export default Footer;
