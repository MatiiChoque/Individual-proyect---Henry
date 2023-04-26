import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ countryId, name, flags, continent }) => {
  return (
    <div className="CardStyle">
      <Link className="TextLink" to={`/home/${countryId}`}>
        <button className="ButtonName">{name}</button>
      </Link>
      <h5 className="TextLink">{continent}</h5>
      <img className="ImageCard" src={flags} alt="img not found" />
    </div>
  );
};

export default Card;
