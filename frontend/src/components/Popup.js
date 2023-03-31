import React, { useState } from 'react';
import '../styles/Popup.css';
import '../assets/images/movieposter.png';
import MovieCard from './MovieCard';

export default function Popup({movieData}) {
    const [details, setDetails] = useState(false);

    const handleDetailsOpen = () => {
        setDetails(true);
    };

    const handleDetailsClose = () => {
        setDetails(false);
    }
    console.log(movieData);
    return(
        <div>
        <MovieCard className="movie-card" onClick={handleDetailsOpen}/>
                <div className="popup-image" alt='movieposter.png'></div>
                <div className='popup-container' onClick={handleDetailsClose}></div>
                </div>
                
    )

}