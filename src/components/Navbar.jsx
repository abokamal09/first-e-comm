import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Navbar
        </NavLink>
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="#">
            Features
          </NavLink>
          <NavLink className="nav-link" to="#">
            Pricing
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
