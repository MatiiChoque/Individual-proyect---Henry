import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/home" className="LinkLogo">
        <button className="ButtonLink1">Henry Countries!</button>
      </Link>

      <Link to="/activities" className="LinkNav">
        <button className="ButtonLink2">Create Activity</button>
      </Link>

      <Link to="/activities/list" className="LinkNav">
        <button className="ButtonLink2"> Activity List</button>
      </Link>
    </nav>
  );
};

export default NavBar;
