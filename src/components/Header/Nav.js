import React from "react";
import { FaBars } from "react-icons/fa";

function Nav() {
  return (
    <ul className="navbar">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#menu">Menu</a>
      </li>
      <li>
        <a href="#reservations">Reservations</a>
      </li>
      <li>
        <a href="#">Order Online</a>
      </li>
      <li>
        <a href="#">Login</a>
      </li>
      <li>
        <FaBars className="hamburger" onClick={() => console.log("clicked")} />
      </li>
    </ul>
  );
}

export default Nav;
