import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearDetailCountry, getDetailCountry } from "../../actions";
import "./Detail.css";
import NavBar from "../NavBar/NavBar";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  let myCountry = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetailCountry(id));

    return () => {
      dispatch(clearDetailCountry());
    };
  }, []);

  console.log(myCountry);

  return (
    <div className="all">
      <NavBar />
      {myCountry ? (
        <div className="Countainer">
          <h1 className="Title">Country: {myCountry.name}</h1>
          <img className="Img" src={myCountry.flags} alt={myCountry.name} />
          <div>
            <h1 className="Title">Detail:</h1>
            <h2 className="SubTitle">ID: {myCountry.id}</h2>
            <h2 className="SubTitle">Capital: {myCountry.capital}</h2>
            <h2 className="SubTitle">Continent: {myCountry.continent}</h2>
            {myCountry.subregion && (
              <h2 className="SubTitle">Subregion: {myCountry.subregion}</h2>
            )}
            {myCountry.area && (
              <h2 className="SubTitle">Area: {myCountry.area} km2</h2>
            )}
            <h2 className="SubTitle">Population: {myCountry.population}</h2>
          </div>

          {myCountry.Activities?.length ? (
            <div>
              <Link className="SubTitle" to="/activities">
                <button className="ButtonLink3">Activities</button>
              </Link>
              {myCountry.Activities?.map((c) => {
                return (
                  <div>
                    <h3 className="SubTitle">{c.name}</h3>
                    <h3 className="SubTitle">Dificulty: {c.dificulty}</h3>
                    <h3 className="SubTitle">Duration: {c.duration} hs.</h3>
                    <h3 className="SubTitle">Season: {c.season}</h3>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="Observation">
              <p className="SubTitle">
                Observation: there are no activities planned for this country,
                please enter here.
                <Link className="SubTitle" to="/activities">
                  <button className="ButtonGoActivity">Create Activity</button>
                </Link>
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="loading">
          <h1> Loading... </h1>
        </div>
      )}
    </div>
  );
};

export default Detail;
