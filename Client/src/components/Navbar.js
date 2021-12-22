import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const clickHandler = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          {"{ TASHY }"}
        </Link>
        <div className="menu-icon" onClick={clickHandler}>
          {click ? (
            <FaTimes className="fa-times" />
          ) : (
            <FaBars className="fa-bars" />
          )}
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#projects" className="nav-links" onClick={closeMobileMenu}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={closeMobileMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <Link
              to="//github.com/Tashy009"
              target="_blank"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Github
            </Link>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
