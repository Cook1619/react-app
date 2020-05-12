import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <header>
      <h1>Dev Tips and Tricks</h1>
      <NavLink to="/" exact={true}>
        Home
      </NavLink>
      <NavLink to="/javascript">Javascript</NavLink>
      <NavLink to="/css">CSS</NavLink>
    </header>
  </div>
);

export default Header;