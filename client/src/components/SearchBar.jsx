import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountries } from "../actions";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (search.length === 0) return alert("You should introduce a country");
    dispatch(getNameCountries(search));
    setSearch("");
  };

  const handleOnInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };
  return (
    <div>
      <form className="Search" onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Write a country"
          onChange={handleOnInputChange}
          value={search}
        />
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
