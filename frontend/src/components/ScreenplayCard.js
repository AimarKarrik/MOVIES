import React, { useState } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import '../assets/images/movieposter.png'
import '../styles/ScreenplayCard.css'


export default function ScreenplayCard({ screenplay }) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/screenplay/${screenplay.id}`)
    }
    return (
        <>
            <div className="card" onClick={handleClick}>
                <div className='card-image'></div>
                <p>{screenplay.title}</p>
            </div>
        </>
    )
}