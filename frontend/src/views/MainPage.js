import React, { useEffect, useState } from 'react';
import '../assets/images/movieposter.png'
import MovieCard from '../components/MovieCard';
import NavBar from '../components/Navbar';
import '../styles/MainPage.css';
import MovieList from '../components/MovieList.js';



export default function MainPage( ) {
    const [movies, setMovies] = useState([]);
    const [episodes, setEpisodes] = useState([]);

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
    
    return (
        <div className="main-page">
            <NavBar />
            <div>
        <MovieList title={'New movies'} />
        <div className='movie-card-container'>
        {movies.map(movie => (
          <MovieCard 
            key={movie.id}
            movieData={movie} 
            episodeData={episodes.find(episode => episode.id === movie.episodeId)} 
          />
        ))}
        </div>
        </div>

<div>
        <MovieList title={'Trending movies'} />
        <div className='movie-card-container'>
        {movies.map(movie => (
          <MovieCard 
            key={movie.id} movieData={movie}
            episodeData={episodes.find(episode => episode.id === movie.episodeId)}
          />
        ))}
        </div>
        </div>
        </div>
    )
}