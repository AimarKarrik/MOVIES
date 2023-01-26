import React from 'react';
import moviePoster from '../images/movieposter.png'
import NavBar from '../components/Navbar';
import '../styles/MainPage.css'

export default function MainPage() {

  const MoviePreview = ({ id, title, content, imageUrl }) => {
    return (
      <div className="MoviePreview">
        <div className='imageUrl'><img source={imageUrl} alt={title} /></div>
      </div>
    )
  }

  return (
    <>
      <NavBar />
      <div className='MovieCategory'>
        <h1>New movies</h1>
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
      </div>
      <div className='MovieCategory'>
        <h1>Movies</h1>
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
        <MoviePreview title={"Demo Movie"} imageUrl={moviePoster} />
      </div>
      <div className='MovieCategory'>
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
