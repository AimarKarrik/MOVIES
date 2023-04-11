import React, { useEffect, useState } from 'react';
import '../assets/images/movieposter.png'
import MovieCard from '../components/MovieCard';
import NavBar from '../components/Navbar';
import '../styles/MainPage.css';



export default function MainPage() {
    const [screenplays, setScreenplays] = useState([]);

    useEffect(() => {
        console.log("useEffect");
        fetch("http://localhost:3001/screenplays?page=1&pageSize=10", {
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

            <div className='movie-category'>
                <h1 className='category-title'>Trending Movies</h1>
                <div className='movie-card-container'>
                    {screenplays.map(screenplay => (
                        <MovieCard key={screenplay.id} movieData={screenplay} />
                    ))}
                </div>
            </div>
            <div className='movie-category'>
                <h1 className='category-title'>New Movies</h1>
                <div className='movie-card-container'>
                    {screenplays.map(screenplay => (
                        <MovieCard key={screenplay.id} movieData={screenplay} />
                    ))}
                </div>
            </div>
            <div className='movie-category'>
                <h1 className='category-title'>Movies For You</h1>
                <div className='movie-card-container'>
                    {screenplays.map(screenplay => (
                        <MovieCard key={screenplay.id} movieData={screenplay} />
                    ))}
                </div>
            </div>
        </>
    )
}
