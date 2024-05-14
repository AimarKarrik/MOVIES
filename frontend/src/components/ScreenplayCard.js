import React from 'react'
import { useNavigate } from 'react-router-dom';
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
                {/* render a jpeg image string */}
                <img src={screenplay.image} alt='screenplayimage' className='card-image' />
                <p>{screenplay.title}</p>
            </div>
        </>
    )
}