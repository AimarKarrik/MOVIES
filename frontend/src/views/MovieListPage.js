import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../components/Navbar";
import MovieCard from "../components/ScreenplayCard";
import "../styles/MovieListPage.css";

export default function MovieListPage() {
  const [screenplays, setScreenplays] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  async function fetchScreenplays(pageNumber) {
    fetch(`http://localhost:3001/screenplays/?page=${pageNumber}&pageSize=30`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setScreenplays(data.data);
        setPageCount(data.pageCount);
      });
  }

  function handlePageClick(pageNumber) {
    fetchScreenplays(pageNumber);
  }

  const pageNumbers = [...Array(pageCount).keys()].map((i) => i + 1);

  useEffect(() => {
    fetchScreenplays(1);
  }, []);

  return (
    <>
      <NavBar />
      <h1 className="page-title">Movies</h1>
      <div className="movie-container">
        {screenplays.map((screenplay) => (
          <MovieCard key={screenplay.id} screenplay={screenplay} />
        ))}
      </div>
      <div className="page-selector-container">
        {pageNumbers.map((pageNumber) => (
          <button key={pageNumber} onClick={() => handlePageClick(pageNumber)} className="page-selector">
            {pageNumber}
          </button>
        ))}
      </div>
    </>
  );
}
