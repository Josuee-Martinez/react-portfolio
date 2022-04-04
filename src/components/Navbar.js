import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <h1 className="logo">
        <Link to="/">Josué</Link>
      </h1>

      <nav className="nav">
        <ul className="list">
          {/* <li className="list-item">
            <Link to="/">Homet</Link>
          </li> */}
          <li className="list-item">
            <Link to="/">About</Link>
          </li>
          <li className="list-item">
            <Link to="/">Projects</Link>
          </li>
          <li className="list-item">
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
