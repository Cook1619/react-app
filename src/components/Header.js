import React from "react";
import Navbar from './Navbar'
import '../App.css'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Header = (props) => (
  <div style={layoutStyle}>
    <header>
        <Navbar />
        {props.children}
    </header>
  </div>
);

export default Header;
