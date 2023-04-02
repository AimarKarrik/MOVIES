import React from 'react'
import { useState, useEffect } from 'react'
import NavBar from '../components/Navbar'
import MovieCard from '../components/ScreenplayCard'
import '../styles/MovieListPage.css'



export default function MovieListPage() {
    const [screenplays, setScreenplays] = useState([])

    useEffect(() => {
        console.log("useEffect");
        fetch("http://localhost:3001/screenplays?page=1&pageSize=32", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => { console.log(data); setScreenplays(data); })
    }, [])


    return (
        <>
            <NavBar />
            <h1 className='page-title'>Movies</h1>
            <div className='movie-container'>
                {screenplays.map(screenplay => (
                    <MovieCard key={screenplay.id} screenplay={screenplay} />
                ))}
            </div>
        </>
    )
}