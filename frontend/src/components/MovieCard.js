import React, { useState } from 'react';
import '../assets/images/movieposter.png';
import '../styles/MovieCard.css';

function MovieCard({ movieData }) {
  const [details, setDetails] = useState(false);
  const handleDetailsOpen = () => {
    setDetails(true);
  };
  console.log(movieData);
  return (
      <div className="movie-card" onClick={handleDetailsOpen}>
        <div className="movie-card-image" alt='movieposter.png'></div>
        <p className="movie-card-title">{movieData.title}</p>
      </div>
  );
}

export default MovieCard;
