import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import "../styles/Button.css";

function Button() {
  return (
    <>
    <div className="movie-details-buttons"></div>
      <button className="movie-details-watch-button">
        <FontAwesomeIcon icon={faPlay} /> Watch
      </button>
      <button className="movie-details-like-button">
        <FontAwesomeIcon icon={faHeart} />
      </button>
    </>
  );
}

export default Button;
