import React from 'react';
import '../assets/images/movieposter.png'
import '../styles/MovieCard.css'

function EpisodeDetails() {
    return
    (
        <>
                        <h2 className='movie-episode-list-title'>Episodes</h2>
                        <div className='movie-details-episodes-list'>
                            {movieData.episodes.map((episode) => (
                                <div className='movie-details-episode'>
                                    <h1 className='movie-details-episode-index'> {episode.id} </h1>
                                    <div className='movie-details-episode-thumbnail'></div>
                                    <div className='movie-details-episode-info'>
                                        <p className='movie-details-episode-title'>{episode.title}</p>
                                        <p className='movie-details-episode-description'>{episode.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
        </>
    )
}