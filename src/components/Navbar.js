import React from 'react';
import NavItem from "./NavItem";
import logo from "../mcook.png";
import '../styles/Navbar.css';

const navLinks = [
  {
    text: "Javascript",
    href: "/javascript",
  },
  {
    text: "React",
    href: "/react",
  },
  {
    text: "CSS",
    href: "/css",
  },
];

const Navbar = () => (
  <div className="sidenav">
  <img className="app-logo" src={logo} alt="logo" />
    <NavItem text="Home" to="/" />
    <NavItem text="About" to="/about" />
    <NavItem text="Contact" to="/contact" />
    <NavItem text="Blogs" to="/blog" subNav={navLinks} />
    <NavItem text="Tips & Tricks" to="/tips" subNav={navLinks} />
  </div>
);

export default Navbar;
