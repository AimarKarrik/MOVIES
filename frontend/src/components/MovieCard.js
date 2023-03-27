import '../assets/images/movieposter.png';
import '../styles/MovieCard.css';
import React, { useState } from 'react';
import MovieDetails from './MovieDetails';
import EpisodeDetails from './EpisodeDetails';

function MovieCard({ movieData }) {
  const [details, setDetails] = useState(false);

  const handleDetailsOpen = () => {
    setDetails(true);
  }

  const handleDetailsClose = () => {
    setDetails(false);
  }
  console.log(movieData);
  return (
    <>
      <div className="movie-card" onClick={handleDetailsOpen}>
        <div className="movie-card-image" alt='movieposter.png'></div>
        <p className="movie-card-title">{movieData.title}</p>
      </div>
      
      {details && ( 
        <div className="movie-card-container" onClick={handleDetailsClose}>
            <MovieDetails movieDetails={movieData} />
            <EpisodeDetails episodeDetails={movieData.episodeDetails}/>
          </div>
      )}
    </>
  );
}

export default MovieCard;
