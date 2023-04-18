import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  countriesByAlphabeticOrder,
  filterCountriesByContinent,
  getCountries,
} from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginated from "./Paginated";

const Home = () => {
  //todo                                           DEFINIMOS LOS ESTADOS Y EL PAGINADO
  const dispatch = useDispatch();

  const allCountries = useSelector((state) => state.countries);

  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);
  const [, setOrder] = useState("");
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //todo                                             DESPACHAMOS TODOS LOS PAISES
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(getCountries());
  };

  const handleFilterContinent = (event) => {
    dispatch(filterCountriesByContinent(event.target.value));
    setCurrentPage(1);
  };

  const handleAlphabeticOrder = (event) => {
    dispatch(countriesByAlphabeticOrder(event.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${event.target.value}`);
  };

  //todo                                                     RENDERIZADO
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
        <select className="Filter_Option" onChange={handleAlphabeticOrder}>
          <option>Filter By Alphabetic Order</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        <select className="Filter_Option" onChange={handleFilterContinent}>
          <option value="All">All Continents</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        <h2>hola</h2>
        <Paginated
          countriesPerPage={countriesPerPage}
          allCountries={allCountries.length}
          currentPaginated={paginated}
        />
        {currentCountries?.map((country) => {
          return (
            <fragment>
              <Card
                name={country.name}
                flags={country.flags}
                continent={country.continent}
              />
            </fragment>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
