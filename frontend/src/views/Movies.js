import React, { useEffect, useState } from 'react';
import '../assets/images/movieposter.png'
import MovieCard from '../components/MovieCard';
import '../styles/MainPage.css';
import MovieList from '../components/MovieList.js';
import Popup from '../components/Popup';



export default function MainPage( ) {
    const [movies, setMovies] = useState([]);


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
          });
    
    return (
        <div className="main-page">
            <div>
        <MovieList title={'New movies'} />
        <div className='movie-card-container'>
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movieData={movie}
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
          />
        ))}
        </div>
        </div>
        </div>
    );
};