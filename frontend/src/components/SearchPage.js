import React, { useState, useEffect } from 'react';
import '../styles/SearchPage.css';
import { FaSearch } from 'react-icons/fa';
import MovieCard from './MovieCard';

function SearchPage() {
  const [screenplays, setScreenplays] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    console.log("useEffect");
    fetch("http://localhost:3001/screenplays?title", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => { console.log(data); setScreenplays(data); })
}, [])

  return (
    <div className="search-page">
      <div className="search-box">
        <form>
          <button className="btn-search">
            <FaSearch />
          </button>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input-search"
            placeholder="Type to Search..."
          />
        </form>
      </div>
      <div className="screenplays-container">
        {screenplays.map((movie) => (
          <MovieCard key={movie.id} movieData={movie} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
