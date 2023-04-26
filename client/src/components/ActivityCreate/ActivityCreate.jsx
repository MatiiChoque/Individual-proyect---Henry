import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postActivity, getCountries } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import "./ActivityCreate.css";

const validate = (input) => {
  let errors = {};
  if (!input.name) {
    errors.name = "You must fill this field above";
  }
  if ((input.duration = 0)) {
    errors.duration = "You must fill this field";
  }
  if (input.duration < 0) {
    errors.duration = "Duration less than 0";
  }
  if (!input.dificulty) {
    errors.dificulty = "You must choose the difficulty";
  }
  if (!input.season) {
    errors.season = "You must choose the season";
  }
  if (
    !input.countryId ||
    input.countryId === [] ||
    input.countryId?.length === 0
  ) {
    errors.countryId = "You must select a country";
  }
  if (new Set(input.countryId).size < input.countryId?.length) {
    errors.countryId = "Should not have repeated countries";
  }
  return errors;
};

const ActivityCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countries = useSelector((state) => state.allCountries);
  const [errors, setErrors] = useState({});
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
    setErrors(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
    console.log(errors);
  };

  const handleSelect = (event) => {
    setInput({
      ...input,
      countryId: [...input.countryId, event.target.value],
    });
    setErrors(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );

    console.log(input);
  };

  const handleDelete = (country, event) => {
    setInput({
      ...input,
      countryId: input.countryId.filter((c) => c !== country),
    });
    setErrors(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleCheck = (event) => {
    if (event.target.checked) {
      setInput({
        ...input,
        season: event.target.value,
      });
      setErrors(
        validate({
          ...input,
          [event.target.name]: event.target.value,
        })
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      input.name === "" ||
      input.duration === 0 ||
      input.dificulty === "" ||
      input.season === "" ||
      input.countryId?.length === 0
    )
      return alert("You must complete the fields");
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
      <div className="Nav_Bar">
        <NavBar />
      </div>
      <h1 className="Text">Create Activity</h1>

      <form className="Form1" onSubmit={handleSubmit}>
        <div className="Form">
          <div className="Labels">
            <label className="TextLabel">Name:</label>
            <label className="TextLabel">Duration:</label>
            <label className="TextLabel">Difficulty:</label>
            <label className="TextLabel">Season:</label>
          </div>

          <div className="Inputs">
            <input
              className="InputsForms"
              type="text"
              name="name"
              value={input.name}
              onChange={handleOnChange}
            />
            <input
              className="InputsForms"
              type="number"
              name="duration"
              min="0"
              value={input.duration}
              onChange={handleOnChange}
            />
            <div className="FieldDifficulty">
              <input
                className="InputsForms"
                type="range"
                min="0"
                max="5"
                name="dificulty"
                value={input.dificulty || 0}
                onChange={handleOnChange}
              />
              <div className="ValueRight">{input.dificulty}</div>
            </div>

            <div className="InputCheck">
              <label className="TextCheck">
                <input
                  type="radio"
                  name="season"
                  value="Summer"
                  onChange={handleCheck}
                />
                Summer
              </label>
              <label className="TextCheck">
                <input
                  type="radio"
                  name="season"
                  value="Autumn"
                  onChange={handleCheck}
                />
                Autumn
              </label>
              <label className="TextCheck">
                <input
                  type="radio"
                  name="season"
                  value="Winter"
                  onChange={handleCheck}
                />
                Winter
              </label>
              <label className="TextCheck">
                <input
                  type="radio"
                  name="season"
                  value="Spring"
                  onChange={handleCheck}
                />
                Spring
              </label>
            </div>
          </div>
        </div>
        {errors.name && <p className="Error">{errors.name}</p>}
        {errors.duration && <p className="Error">{errors.duration}</p>}
        {errors.countryId && <p className="Error">{errors.countryId}</p>}
        <div></div>
        {errors.dificulty && <p className="Error">{errors.dificulty}</p>}
        <div>{errors.season && <p className="Error">{errors.season}</p>}</div>

        <div>
          <select className="Form__Select" onChange={handleSelect}>
            <option className="op"> Countries </option>
            {countries.map((v) => (
              <option className="op" value={v.id}>
                {v.name}
              </option>
            ))}
          </select>
        </div>
        <div className="ContainerSelected">
          {input.countryId.map((country) => (
            <div className="ItemSelected">
              <input
                type="button"
                value="X"
                onClick={(event) => handleDelete(country, event)}
              />
              <p className="P_List">{country}</p>
            </div>
          ))}
        </div>
        <div>
          <button className="ButtonCreate" type="submit">
            Create Activity
          </button>
        </div>
      </form>
    </div>
  );
};

export default ActivityCreate;
