import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      &copy; 2024 AJR Dynamic Solutions | Joshua, Rod, & Andrew |
      <Link to="/aboutus"> About Us</Link>
    </footer>
  );
};

export default Footer;
