import React, { useState } from 'react';
import '../assets/images/movieposter.png'
import '../styles/MovieCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'


export default function MovieCard() {
    const [details, setDetails] = useState(false);
    const handleDetailsOpen = () => {
        setDetails(true);
    }
    const handleDetailsClose = () => {
        setDetails(false);
    }

    return (
        <>
            <div className="movie-card" onClick={handleDetailsOpen}>
                <div className='movie-card-image'></div>
                <p className='movie-card-title'>Movie Title</p>
            </div>
            {details ?
                <div className='movie-details-container' onClick={handleDetailsClose}>
                    <div className='movie-details'>
                        <div className='movie-details-header'>
                            <h1 className='movie-details-title'> Movie Title </h1>
                            <div className='movie-details-buttons'>
                                <button className='movie-details-watch-button'><FontAwesomeIcon icon={faPlay} /> Watch</button>
                                <button className='movie-details-like-button'>{"<3"}</button>
                                <div className='movie-details-rating'>1 2 3 4 5</div>
                            </div>
                        </div>
                        <p className='movie-details-info'> 2023 <span>18+</span> seasons 1 <span>HD</span> </p>
                        <p className='movie-details-description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra sem risus, non tempus massa pretium et. Maecenas tincidunt viverra mi, nec tincidunt diam pellentesque vel. Nam cursus, neque vitae pretium congue, quam purus convallis metus, in ornare arcu purus sed neque. Integer blandit sem nisl, sed placerat metus consequat eget. Suspendisse pulvinar eleifend justo, eu dapibus lorem efficitur et. Nullam pulvinar consectetur velit vel eleifend. Quisque placerat non metus sit amet aliquet. Etiam id vestibulum orci. Suspendisse a augue ligula. Etiam egestas massa at sapien auctor varius. Aliquam quis urna urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam vitae orci vel velit aliquet pulvinar id ut nunc. Quisque rhoncus ligula ac diam maximus, sed consectetur sapien mollis. Cras id arcu ac ipsum ornare ultrices. Sed felis nisl, ultrices ut eleifend et, fermentum id nisi. </p>
                        <h2 className='movie-episode-list-title'>Episodes</h2>
                        <div className='movie-details-episodes-list'>
                            <div className='movie-details-episode'>
                                <h1 className='movie-details-episode-index'> 1 </h1>
                                <div className='movie-details-episode-thumbnail'></div>
                                <div className='movie-details-episode-info'>
                                    <p className='movie-details-episode-title'>Episode Title</p>
                                    <p className='movie-details-episode-description'>Episode description orem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra sem risus, non tempus massa pretium et.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : ""
            }
        </>
    )
}