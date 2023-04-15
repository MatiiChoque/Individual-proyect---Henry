import React from "react";

const Card = ({ name, flags, continent }) => {
  return (
    <div>
      <h3>{name}</h3>
      <h5>{continent}</h5>
      <img src={flags} alt="img not found" />
    </div>
  );
};

export default Card;
