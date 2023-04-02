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
            <div className="card" onClick={handleDetails}>
                <div className='card-image'></div>
                <p>{screenplay.title}</p>
            </div>
            {details ? <ScreenplayDetailPopup screenplay={screenplay} onClick={handleDetails} /> : ""}
        </>
    )
}