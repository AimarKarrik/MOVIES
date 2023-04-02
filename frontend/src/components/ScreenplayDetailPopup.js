import React from 'react';
import '../assets/images/movieposter.png'
import '../styles/ScreenplayDetailPopup.css'
import ScreenplayDetailsHeader from './ScreenplayDetailsHeader';
import ScreenplayDetails from './ScreenplayDetails';


export default function ScreenplayDetailPopup({ screenplay }) {
    return (
        <div className='details-container'>
            <div className='details'>
                <ScreenplayDetailsHeader screenplay={screenplay} />
                <ScreenplayDetails screenplay={screenplay} />
            </div>
        </div>
    )
}