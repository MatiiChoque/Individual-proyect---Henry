import React from "react";
import "./Paginated.css";

const Paginated = ({
  countriesPerPage,
  totalCountry,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCountry / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  const previusPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const page = (n) => {
    setCurrentPage(n);
  };

  return (
    <nav className="Paginated">
      <ul className="Paginated_List">
        <button className="Paginated_Number" onClick={previusPage}>
          Prev
        </button>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number}>
              <button
                className={`Paginated_Number${
                  number === currentPage ? "currentPage" : ""
                }`}
                onClick={() => page(number)}
              >
                {number}
              </button>
            </li>
          ))}
        <button className="Paginated_Number" onClick={nextPage}>
          Next
        </button>
      </ul>
    </nav>
  );
};

export default Paginated;
