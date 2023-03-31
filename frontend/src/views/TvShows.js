import React, { useEffect, useState } from 'react';
import '../assets/images/movieposter.png'
import MovieCard from '../components/MovieCard';
import '../styles/MainPage.css';
import MovieList from '../components/MovieList.js';
import Popup from '../components/Popup';



export default function MainPage( ) {
    const [movies, setMovies] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const [details, setDetails] = useState(false);

    useEffect(() => {
        console.log('useEffect');
        fetch("http://localhost:3001/movies?page=1&pageSize=10", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(response => response.json())
          .then(data => { 
            console.log(data); 
            setMovies(data); 
          });
    
        fetch("http://localhost:3001/episodes", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(response => response.json())
          .then(data => { 
            console.log(data); 
            setEpisodes(data); 
          });
      }, []);

      const handleDetailsOpen = () => {
        setDetails(true);
    };
    const handleDetailsClose = () => {
        setDetails(null);
    };
    
    return (
        <div className="main-page">
            <div>
        <MovieList title={'New TV shows'} />
        <div className='movie-card-container'>
        {movies.map(movie => (
          <MovieCard 
            key={movie.id}
            movieData={movie} 
            episodeData={episodes.find(episode => episode.id === movie.episodeId)} 
            onClick={() => handleDetailsOpen(movie)}
          />
        ))}
        </div>
        </div>

<div>
        <MovieList title={'Trending TV shows'} />
        <div className='movie-card-container'>
        {movies.map(movie => (
          <MovieCard 
            key={movie.id} movieData={movie}
            episodeData={episodes.find(episode => episode.id === movie.episodeId)}
            onClick={() => handleDetailsOpen(movie)}
          />
        ))}
        </div>
        </div>

        {details && (movie => (
          <Popup
          movieData={movie}
          episodeData={episodes.find(episode => episode.id === movie.episodeId)}
          onClick={handleDetailsClose}
          />
        ))}
        </div>
    )
}