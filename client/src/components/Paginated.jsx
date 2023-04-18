import React from "react";

const Paginated = ({ countriesPerPage, allCountries, currentPaginated }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="Paginated">
      <ul className="Paginated_List">
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number}>
              <button
                className="Paginated_Number"
                onClick={() => currentPaginated(number)}
              >
                {number}
              </button>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Paginated;
