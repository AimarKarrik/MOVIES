import React from "react";
import "../styles/EpisodesList.css";
import EpisodeCard from "./EpisodeCard";

export default function EpisodesList(episodes) {
  return (
    <>
      <h2 className="movie-episode-list-title">Episodes</h2>
      <div className="movie-details-episodes-list">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </>
  );
}
