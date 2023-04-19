import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { postActivity, getActivities, getCountries } from "../actions";
import { useDispatch, useSelector } from "react-redux";

//todo MODIFICAR LA PROPIEDAD "DIFICULTY POR DIFFICULTY TODAAA LA APP"

const ActivityCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countries = useSelector((state) => state.allCountries);
  const [input, setInput] = useState({
    name: "",
    duration: 0,
    dificulty: "",
    season: "",
    countryId: [],
  });

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const handleOnChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelect = (event) => {
    setInput({
      ...input,
      countryId: [...input.countryId, event.target.value],
    });
    console.log(input);
  };

  const handleDelete = (country) => {
    setInput({
      ...input,
      countryId: input.countryId.filter((c) => c !== country),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postActivity(input));
    alert("Activity Created !!");
    setInput({
      name: "",
      duration: 0,
      dificulty: "",
      season: "",
      countryId: [],
    });
    navigate("/home");
  };

  return (
    <div>
      <Link to="/home">
        <button>Volver</button>
      </Link>
      <h1>CREATE ACTIVITY</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Duration:</label>
          <input
            type="number"
            name="duration"
            value={input.duration}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Difficulty:</label>
          <input
            type="text"
            name="dificulty"
            value={input.dificulty}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Season:</label>
          <input
            type="text"
            name="season"
            value={input.season}
            onChange={handleOnChange}
          />
        </div>

        <div className="Form__Input">
          <select className="Form__Select" onChange={handleSelect}>
            <option className="op"> Countries </option>
            {countries.map((v) => (
              <option className="op" value={v.id}>
                {v.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          {input.countryId.map((country) => (
            <div>
              <input
                type="button"
                value="X"
                onClick={() => handleDelete(country)}
              />
              <p>{country}</p>
            </div>
          ))}
        </div>
        <div>
          <button type="submit">Create Activity</button>
        </div>
      </form>
    </div>
  );
};

export default ActivityCreate;
