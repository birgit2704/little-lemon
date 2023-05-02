import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <Link to="/reservations">Reservations</Link>
        </li>
        <li>
          <a href="#">Order Online</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
      <FaBars className="hamburger" onClick={() => console.log("clicked")} />
    </div>
  );
}

export default Nav;
