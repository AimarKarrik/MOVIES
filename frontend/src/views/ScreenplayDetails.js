import React from "react";
import NavBar from "../components/Navbar";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/ScreenplayDetails.css";
import poster from "../assets/images/movieposter.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import ReviewContainer from "../components/ReviewContainer";

export default function ScreenplayDetails() {
  const id = useParams().id;
  const location = useLocation();

  const [screenplay, setScreenplay] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {

    fetch(`http://localhost:3001/screenplays/ById?id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setScreenplay(data.data);
      });
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:3001/reviews/ByScreenplay?screenplayId=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReviews(data.data);
      });
  }, [id]);


  return (
    <>
      <NavBar />
      <div className="poster-image">
        <div className="poster-overlay"></div>
        <img alt="poster" src={poster}></img>
      </div>
      <div className="screenplay-container">
        <div className="screenplay-info">
          <div className="title-container">
            <h1>{screenplay.title}</h1>
            <FontAwesomeIcon
              icon={faShareNodes}
              className="share-icon"
              onClick={() => {
                navigator.clipboard.writeText(
                  "http://localhost:3000" + location.pathname
                );
                alert("Link copied to clipboard");
              }}
            />
          </div>
          <p className="screenplay-details">
            {" "}
            {screenplay.genres} {screenplay.ageRating}{" "}
            {new Date(screenplay.releaseDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            rating: {screenplay.rating}
          </p>
          <p className="screenplay-description">{screenplay.description}</p>
        </div>
        <ReviewContainer reviews={reviews} screenplayId={id} />
      </div>
    </>
  );
}
