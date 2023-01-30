import React, { useState } from 'react';
import moviePoster from '../assets/images/movieposter.png'
import NavBar from '../components/Navbar';
import '../styles/MainPage.css'

export default function MainPage() {

  const MoviePreview = ({ id, title, content, date, seasons, ageRating, quality, imageUrl }) => {
    const [details, setDetails] = useState(false);
    const handleDetailsOpen = () => {
      setDetails(true);
    }
    const handleDetailsClose = () => {
      setDetails(false);
    }

    return (
      <>
        <div className="Movie-preview" onClick={handleDetailsOpen}>
          <div className='imageUrl'><img source={imageUrl} alt={title} /></div>
        </div>
        {details ?
          <div className='details-container'>
            <div className='details'>
              <div className='details-poster' style={{ backgroundImage: imageUrl }}>
                <h1 className='details-back' onClick={handleDetailsClose}> {"< Back"} </h1>
                <h1 className='details-title'> {title} </h1>
                <button className='details-watch-button'>Watch</button>
                <button className='details-like-button'>{"<3"}</button>
                <div className='details-rating'>1 2 3 4 5</div>
              </div>
              <p className='details-info'> {date} <span>{ageRating}</span> seasons {seasons} <span>{quality}</span> </p>
              <p> {content} </p>
              <h1>Episodes</h1>
              <div className='movie-episode'></div>
            </div>
          </div> : ""}
      </>
    )
  }

  return (
    <>
      <NavBar />
      <div className='movie-category'>
        <h1>New movies</h1>
        <MoviePreview title={"Demo Movie"} imageUrl={'../assets/images/movieposter.png'} content={"Lorem Ipsum 123542556"} date={2023} ageRating={"18+"} quality={"HD"} />
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
      </div>
      <div className='movie-category'>
        <h1>Movies</h1>
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
      </div>
      <div className='movie-category'>
        <h1>TV show</h1>
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
      </div>
    </>
  )
}
