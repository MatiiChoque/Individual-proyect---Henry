import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <h1 className="TitleText">Welcome to my App</h1>
      <Link to="/home">
        <button className="ButtonLanding">Start</button>
      </Link>
    </div>
  );
};
export default LandingPage;
