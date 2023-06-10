import React from "react";
import logo from "../../assets/images/logo.jpg";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <ul aria-label="list of social links" className="footer-social">
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin aria-label="linked-in" className="social" />
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook aria-label="facebook" className="social" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter aria-label="twitter" className="social" />
            </a>
          </li>
        </ul>
        <address className="address">
          Little Lemon
          <br />
          1234, Main Street
          <br />
          CHICAGO
        </address>
        <img className="footer-logo" alt="logo" src={logo} />
      </div>
    </footer>
  );
}

export default Footer;
