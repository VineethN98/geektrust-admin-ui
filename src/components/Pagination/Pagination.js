import React from "react";

// Importins styles
import "./Pagination.css";
// FaAngleDoubleLeft;
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Pagination = ({
  usersPerPage,
  totalUsers,
  paginate,
  prevPage,
  nextPage,
  selectedPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="paginationNav">
      <ul className="pagination">
        <li>
          <a onClick={() => paginate(1)} href="#">
            <FaAngleDoubleLeft />
          </a>
        </li>

        <li>
          <a onClick={() => prevPage()} href="#">
            <FaAngleLeft />
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page">
            {selectedPage === number ? (
              <a
                onClick={() => paginate(number)}
                href="#"
                className="page-link"
                style={{ backgroundColor: "yellow" }}
              >
                {number}
              </a>
            ) : (
              <a
                onClick={() => paginate(number)}
                href="#"
                className="page-link"
              >
                {number}
              </a>
            )}
          </li>
        ))}
        <li>
          <a onClick={() => nextPage(pageNumbers.length)} href="#">
            <FaAngleRight />
          </a>
        </li>
        <li>
          <a onClick={() => paginate(pageNumbers.length)} href="#">
            <FaAngleDoubleRight />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
