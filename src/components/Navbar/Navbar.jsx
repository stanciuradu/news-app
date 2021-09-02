import React from "react";
import "../../components/Navbar/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Latest news</h1>
      <div className="button">
        <Link to="/">
          <button type="button" className="current-page"></button>
        </Link>
        <Link to="/second_page">
          <button type="button" className="current-page"></button>
        </Link>
        <Link to="/last_page">
          <button type="button" className="current-page"></button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
