import React from 'react';
import '../assets/images/movieposter.png';
import '../styles/MovieCard.css';
import Popup from './Popup';

function MovieCard({ movieData }) {

  console.log(movieData);
  return (
      <div className="movie-card">
        <div className="movie-card-image" alt='movieposter.png'></div>
        <p className="movie-card-title"></p>
        <Popup />
      </div>
  );
}

export default MovieCard;
