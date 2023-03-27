import React from 'react';
import '../styles/EpisodeDetails.css';

function EpisodeDetails({ movieData }) {
    if (!movieData) {return null;}
    return (
        <div className="episode-list">
          <h2 className="title">Episodes</h2>
          <div className="details">
            {movieData.episodes.map((episodeDetails) => (
              <div className="episode" key={episodeDetails.id}>
                <h1 className="index">{episodeDetails.id}</h1>
                <div className="thumbnail"></div>
                <div className="info">
                  <p className="episode-title">{episodeDetails.title}</p>
                  <p className="description">{episodeDetails.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

export default EpisodeDetails;
