import React, {useState} from React;
import '../assets/images/movieposter.png'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'


export default function MovieDetailView () {
    const [setDetails] = useState(false);
        setDetails(true);
    }
    const handleDetailsClose = () => {
       setDetails(false);
    }
    console.log(movieData);
    return (
        <>
        {
                <div className='movie-details-container' onClick={handleDetailsClose}>
                    <div className='movie-details'>
                        <div className='movie-details-header'>
                            <h1 className='movie-details-title'> {movieData.title} </h1>
                            <div className='movie-details-buttons'>
                                <button className='movie-details-watch-button'><FontAwesomeIcon icon={faPlay} /> Watch</button>
                                <button className='movie-details-like-button'><FontAwesomeIcon icon={faHeart} /></button>
                                <div className='movie-details-rating'>1 2 3 4 5</div>
                            </div>
                        </div>
                        <p className='movie-details-info'> {movieData.releaseYear} <span>{movieData.ageRating}</span> seasons {movieData.seasons} <span>{movieData.quality}</span> </p>
                        <p className='movie-details-description'> {movieData.description} </p>
                       
        }
                        </div> 
                        </>

                
    )