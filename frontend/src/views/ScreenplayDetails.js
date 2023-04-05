import React from "react";
import NavBar from "../components/Navbar";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/ScreenplayDetails.css";
import poster from "../assets/images/movieposter.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

export default function ScreenplayDetails() {
    const id = useParams().id;
    const location = useLocation();

    const [screenplay, setScreenplay] = useState([])

    useEffect(() => {
        console.log("useEffect");
        fetch(`http://localhost:3001/screenplays/ById?id=${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => { console.log(data); setScreenplay(data); })
    }, [id])


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
                        <FontAwesomeIcon icon={faShareNodes} style={{ color: "#ffffff", fontSize: "24px", }} onClick={() => {
                            navigator.clipboard.writeText("http://localhost:3000" + location.pathname)
                            alert("Link copied to clipboard")
                        }}
                        />
                    </div>
                    <p className="screenplay-details"> {screenplay.genres} {screenplay.ageRating} {new Date(screenplay.releaseDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
                    <p className="screenplay-description">{screenplay.description}</p>
                </div>
            </div>
        </>
    );
}
