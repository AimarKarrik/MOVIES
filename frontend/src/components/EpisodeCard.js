import React from 'react';
import '../styles/EpisodeCard.css';

export default function EpisodeCard({ episode }) {
    return (
        <div className='movie-details-episode'>
            <h1 className='movie-details-episode-index'> {episode.id} </h1>
            <div className='movie-details-episode-thumbnail' data-testid="episode-thumbnail"></div>
            <div className='movie-details-episode-info'>
                <p className='movie-details-episode-title'>{episode.title}</p>
                <p className='movie-details-episode-description'>{episode.description}</p>
            </div>
        </div>
    )
}