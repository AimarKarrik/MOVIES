import '../styles/ScreenplayDetailsHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

export default function ScreenplayDetailsHeader({ screenplay }) {
    return (
        <div className='details-header'>
            <h1> {screenplay.title} </h1>
            <div className='details-buttons'>
                <button className='watch-button'><FontAwesomeIcon icon={faPlay} /> Watch</button>
                <button className='like-button'><FontAwesomeIcon icon={faHeart} /></button>
                <p>{screenplay.rating}</p>
            </div>
            <button className='close-button'> X </button>
        </div>
    )
}