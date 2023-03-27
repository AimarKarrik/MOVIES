import React from 'react';
import Button from './Button.js'
import '../styles/MovieDetails.css';

function MovieDetails({ movieDetails }) {

    return (
      <><div className="movie-details">
        <div className="movie-details-header">
          <h1 className="movie-details-title">{movieDetails.title}</h1>
          <Button />
          <div className="movie-details-rating">1 2 3 4 5</div>
        </div>
      </div><p className="movie-details-info">
          {movieDetails.releaseYear}{' '}
          <span>{movieDetails.ageRating}</span> seasons {movieDetails.seasons}{' '}
          <span>{movieDetails.quality}</span>
        </p><p className="movie-details-description">
          {movieDetails.description}
        </p></>
    );
  }

export default MovieDetails;
