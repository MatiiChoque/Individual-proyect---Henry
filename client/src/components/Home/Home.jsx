import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  countriesByAlphabeticOrder,
  filterCountriesByContinent,
  getCountries,
  countriesByPopulationOrder,
  getActivities,
  filterByActivity,
} from "../../actions";
import Card from "../Card/Card";
import Paginated from "../Paginated/Paginated";
import SearchBar from "../SearchBar/SearchBar";
import NavBar from "../NavBar/NavBar";
import "./Home.css";

const Home = () => {
  //todo                                           DEFINIMOS LOS ESTADOS Y EL PAGINADO
  const dispatch = useDispatch();

  const allCountries = useSelector((state) => state.countries);
  const allActivities = useSelector((state) => state.activities);
  const totalCountry = allCountries?.length;

  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);
  const [, setOrder] = useState("");
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

  const currentCountries = allCountries?.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  //todo                                             DESPACHAMOS TODOS LOS PAISES
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, []);

  const handleReLoad = (event) => {
    event.preventDefault();
    dispatch(getCountries());
    setCurrentPage(1);
  };

  const handleFilterActivity = (event) => {
    dispatch(filterByActivity(event.target.value));
    setCurrentPage(1);
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

  const handlePopulationOrder = (event) => {
    event.preventDefault();
    dispatch(countriesByPopulationOrder(event.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${event.target.value}`);
  };
  console.log(currentCountries);
  //todo                                                     RENDERIZADO
  return (
    <div>
      <div className="Nav_Bar">
        <NavBar />
      </div>
      <h1 className="Text">Countries</h1>
      <SearchBar setCurrentPage={() => setCurrentPage(1)} />
      <button
        className="ButtonReload"
        onClick={(event) => {
          handleReLoad(event);
        }}
      >
        Reload Countries
      </button>

      <div>
        <div className="FilterOrder">
          <select className="Filter_Option" onChange={handleFilterContinent}>
            <option value="All">All Continents</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
          <select className="Filter_Option" onChange={handleFilterActivity}>
            <option value="all">Activities</option>
            {allActivities.map((act) => (
              <option value={act.name}>{act.name}</option>
            ))}
          </select>
          <select className="Filter_Option" onChange={handleAlphabeticOrder}>
            <option>Filter By Alphabetic Order</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
          <select className="Filter_Option" onChange={handlePopulationOrder}>
            <option>Filter By Population</option>
            <option value="Higher_Population">Higher Population</option>
            <option value="Lower_Population">Lower Population</option>
          </select>
        </div>
        <div className="Paginated">
          <Paginated
            countriesPerPage={countriesPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalCountry={totalCountry}
          />
        </div>
        <div className="CardsPage">
          {currentCountries?.map((country) => {
            return (
              <fragment>
                <Card
                  countryId={country.id}
                  name={country.name}
                  flags={country.flags}
                  continent={country.continent}
                />
              </fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
