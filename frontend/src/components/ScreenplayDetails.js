import React from 'react'
import '../styles/ScreenplayDetails.css'

export default function ScreenplayDetails({ screenplay }) {
    return (
        <>
            <p className='movie-details-info'> {screenplay.releaseYear} <span>{screenplay.ageRating}</span></p>
            <p className='movie-details-description'> {screenplay.description} </p>
        </>
    )
}