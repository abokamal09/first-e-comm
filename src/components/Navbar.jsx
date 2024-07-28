// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            Menu
          </NavLink>
          <NavLink className="nav-link" to="/cart">
            Cart
          </NavLink>
          {/* <NavLink
            className="nav-link badge bg-primary"
            to="#"
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </NavLink> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
