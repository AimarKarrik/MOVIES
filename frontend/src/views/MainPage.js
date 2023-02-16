import React, { useEffect, useState } from 'react';
import '../assets/images/movieposter.png'
import MovieCard from '../components/MovieCard';
import NavBar from '../components/Navbar';
import '../styles/MainPage.css'


export default async function MainPage() {
    const [movies, setMovies] = useState()

    useEffect(() => {
        fetch("http://localhost:3001/movies?page=1&pageSize=10", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(response => response.json())
        .then(data => {setMovies(data.movies); console.log(data);})
    })

    

    return (
        <>
            <NavBar />
            <div className='movie-category'>
                <h1 className='category-title'>Trending</h1>
                <div className='movie-card-container'>
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </div>
            <div className='movie-category'>
                <h1 className='category-title'>New</h1>
                <div className='movie-card-container'>
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </div>
            <div className='movie-category'>
                <h1 className='category-title'>For You</h1>
                <div className='movie-card-container'>
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </div>
        </>
    )
}
