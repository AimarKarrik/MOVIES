import React, { useEffect, useState } from 'react';
import '../assets/images/movieposter.png'
import MovieCard from '../components/ScreenplayCard';
import NavBar from '../components/Navbar';
import '../styles/MainPage.css'



export default function MainPage() {
    const [screenplay, setScreenplay] = useState([])

    useEffect(() => {
        console.log("useEffect");
        fetch("http://localhost:3001/screenplays?page=1&pageSize=10", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => { console.log(data); setScreenplay(data); })
    }, [])

    return (
        <>
            <NavBar />
            <div className='movie-category'>
                <h1 className='category-title'>Trending screenplay</h1>
                <div className='movie-card-container'>
                    {screenplay.map(screenplay => (
                        <MovieCard key={screenplay.id} screenplay={screenplay} />
                    ))}
                </div>
            </div>
        </>
    )
}
