import React from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const selectedStyle = {
  borderBottom: "solid black 2px",
};

function Nav() {
  return (
    <div aria-label="navigation bar">
      <ul className="navbar">
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? selectedStyle : null)}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? selectedStyle : null)}
            to="/menu"
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? selectedStyle : null)}
            to="/reservations"
          >
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? selectedStyle : null)}
            to="/orderonline"
          >
            Order online
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? selectedStyle : null)}
            to="/login"
          >
            Login
          </NavLink>
        </li>
      </ul>
      <FaBars className="hamburger" onClick={() => console.log("clicked")} />
    </div>
  );
}

export default Nav;
