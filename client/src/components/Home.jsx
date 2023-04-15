import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";

const Home = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(getCountries());
  };

  return (
    <div>
      <Link to="/character"></Link>
      <h1>COUNTRIES</h1>
      <button
        onClick={(event) => {
          handleClick(event);
        }}
      >
        "Volver a cargar todos los paises"(pasar a Ingles)
      </button>

      <div>
        <select>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
        <select>
          <option value="All">All</option>
          <option value="Continent">Continent</option>
          <option value="Activity">Activity</option>
        </select>
        {allCountries?.map((country) => {
          return (
            <fragment>
              <Card
                name={country.name}
                flags={country.flags}
                continent={country.continent}
              />
              ;
            </fragment>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
