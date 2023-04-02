import '../styles/ScreenplayDetailsHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

export default function ScreenplayDetailsHeader({ screenplay }) {
    return (
        <div className='movie-details-header'>
            <h1 className='movie-details-title'> {screenplay.title} </h1>
            <div className='movie-details-buttons'>
                <button className='movie-details-watch-button'><FontAwesomeIcon icon={faPlay} /> Watch</button>
                <button className='movie-details-like-button'><FontAwesomeIcon icon={faHeart} /></button>
                <div className='movie-details-rating'>1 2 3 4 5</div>
            </div>
        </div>
    )
}