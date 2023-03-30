import React, { useState } from 'react';
import MovieDetails from './MovieDetails';
import EpisodeDetails from './EpisodeDetails';
import '../styles/Popup.css';
import '../assets/images/movieposter.png';

function Popup ({ movieData}) {
    const [details, setDetails] = useState(false);

    const handleDetailsClose = () => {
        setDetails(false);
    };

    return (
        <>
            <div className="popup-container">
                <div className="popup-image" alt='movieposter.png'></div>
                </div>
                {details && (
                    <div className="popup-container" onClick={handleDetailsClose}>
                        <MovieDetails movieDetails={movieData}/>
                        <EpisodeDetails EpisodeDetails={movieData.EpisodeDetails}/>
                    </div>
                )}
        </>
    );
};
export default Popup;