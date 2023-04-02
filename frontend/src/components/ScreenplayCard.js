import React, { useState } from 'react';
import '../assets/images/movieposter.png'
import '../styles/ScreenplayCard.css'
import ScreenplayDetailPopup from './ScreenplayDetailPopup';


export default function ScreenplayCard({ screenplay }) {
    const [details, setDetails] = useState(false);
    const handleDetails = () => {
        setDetails(!details);
    }
    return (
        <>
            <div className="movie-card" onClick={handleDetails}>
                <div className='movie-card-image'></div>
                <p className='movie-card-title'>{screenplay.title}</p>
            </div>
            {details ? <ScreenplayDetailPopup screenplay={screenplay} onClick={handleDetails} /> : ""}
        </>
    )
}