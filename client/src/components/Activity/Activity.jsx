import React from "react";
import "./Activity.css";

const Activity = ({ name, duration, dificulty, season }) => {
  return (
    <div className="Activity_Container">
      <h1 className="textTitle">{name}</h1>
      <h3 className="text">Duration: {duration ? `${duration} hs.` : ""} </h3>
      <h3 className="text">Difficulty: {dificulty}</h3>
      <h3 className="text">Season: {season}</h3>
    </div>
  );
};

export default Activity;
