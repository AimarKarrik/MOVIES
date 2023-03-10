import React, { useEffect, useState } from 'react';
import '../assets/images/movieposter.png'
import MovieCard from '../components/MovieCard';
import NavBar from '../components/Navbar';
import EpisodeDetails from '../components/EpisodeDetails';
import MovieDetailView from '../components/MovieDetailView';
import MovieList from '../components/MovieLists';
import '../styles/MainPage.css'



export default function MainPage() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        console.log("useEffect");
        fetch("http://localhost:3001/movies?page=1&pageSize=10", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => { console.log(data); setMovies(data); })
    }, [])

    return (
        <>
            <NavBar />
            <div className='movie-category'>
                <h1 className='category-title'>Trending Movies</h1>
                <div className='movie-card-container'>
                    {movies.map(movie => (
                        <MovieCard key={movie.id} movieData={movie} />
                    ))}
                </div>
            </div>
            <div className='movie-category'>
                <h1 className='category-title'>New Movies</h1>
                <div className='movie-card-container'>
                    {movies.map(movie => (
                        <MovieCard key={movie.id} movieData={movie} />
                    ))}
                </div>
            </div>
            <div className='movie-category'>
                <h1 className='category-title'>Movies For You</h1>
                <div className='movie-card-container'>
                    {movies.map(movie => (
                        <MovieCard key={movie.id} movieData={movie} />
                    ))}
                </div>
            </div>
        </>
    )
}
