import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountries } from "../../actions";
import "./SearchBar.css";

const SearchBar = ({ setCurrentPage }) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (search.length === 0) return alert("You should introduce a country");
    dispatch(getNameCountries(search));
    setCurrentPage();
    setSearch("");
  };

  const handleOnInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };
  return (
    <div>
      <form className="Search" onSubmit={handleOnSubmit}>
        <div className="inputbox">
          <span>Write a country</span>
          <input
            type="text"
            required="required"
            onChange={handleOnInputChange}
            value={search}
          />
          <i></i>
        </div>
        <button
          className="Search_Button"
          type="submit"
          onClick={handleOnSubmit}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
