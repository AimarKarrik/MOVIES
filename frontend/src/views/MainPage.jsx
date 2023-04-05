import React, { useEffect, useState } from 'react';
import '../assets/images/movieposter.png'
import ScreenplayList from '../components/ScreenplayList';
import NavBar from '../components/Navbar';
import '../styles/MainPage.css'



export default function MainPage() {
    const [screenplay, setScreenplay] = useState([])

    useEffect(() => {
        console.log("useEffect");
        fetch("http://localhost:3001/screenplays?page=1&pageSize=10", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => { setScreenplay(data.data); })
    }, [])

    console.log(screenplay);
    return (
        <>
            <NavBar />
            <ScreenplayList screenplays={screenplay} listTitle={"New Movies"} />
            <ScreenplayList screenplays={screenplay} listTitle={"Recomended Movies"} />
        </>
    )
}
