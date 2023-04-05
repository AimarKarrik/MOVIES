import React from "react";
import NavBar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/ScreenplayDetails.css";

export default function ScreenplayDetails() {
    const id = useParams().id;

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

    console.log(screenplay)
    return (
        <>
            <NavBar />
            <div className="poster-image"></div>
            <h1>{screenplay.title}</h1>
            <div className="screenplay-details">
                <div className="screenplay-description">
                    <p> {screenplay.genres} {screenplay.ageRating} {screenplay.rating} {screenplay.releaseDate}</p>
                    <h2>Description</h2>
                    <p>{screenplay.description}</p>
                </div>
            </div>
        </>
    );
}
