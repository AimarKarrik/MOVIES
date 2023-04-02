import React from 'react'
import { useState, useEffect } from 'react'
import NavBar from '../components/Navbar'
import MovieCard from '../components/ScreenplayCard'
import '../styles/MovieListPage.css'
import '../App.css'



export default function MovieListPage() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        console.log("useEffect");
        fetch("http://localhost:3001/screenplays?page=1&pageSize=32", {
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
            <h1>Movies</h1>
            <div className='movie-list-container'>
                {movies.map(movie => (
                    <MovieCard key={movie.id} movieData={movie} />
                ))}
            </div>
        </>
    )
}