import React from "react";
import MovieCard from "./ScreenplayCard";
import "../styles/ScreenplayList.css";

export default function ScreenplayList({ screenplays, listTitle }) {
  return (
    <div className="list-container">
      <h1>{listTitle}</h1>
      <div className="card-container">
        {screenplays.map((screenplay) => (
          <MovieCard key={screenplay.id} screenplay={screenplay} />
        ))}
      </div>
    </div>
  );
}
