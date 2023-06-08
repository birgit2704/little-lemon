import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div aria-label="navigation bar">
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <Link to="/">Menu</Link>
        </li>
        <li>
          <Link to="/reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/">Order online</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
      </ul>
      <FaBars className="hamburger" onClick={() => console.log("clicked")} />
    </div>
  );
}

export default Nav;
