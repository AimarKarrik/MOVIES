import MovieCard from '../components/ScreenplayCard';
import NavBar from '../components/Navbar';
import useMovies from '../hooks/useMovies';
import '../styles/OtherProfile.css';

export default function OtherProfile() {
  const movies = useMovies();

  return (
    <>
      <NavBar />

      <div className='otherProfile-container'>
        <div className='otherProfile-picture' />

        <div className='otherProfile-name'>Username</div>
        <div className='otherProfile-join-time'>Joined in March 2023</div>
      </div>

      <div className='movie-category'>
        <h1 className='category-title'>Liked List</h1>
        <div className='movie-card-container'>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movieData={movie} />
          ))}
        </div>
      </div>
      <div className='movie-category'>
        <h1 className='category-title'>Reviews</h1>
        <div className='movie-card-container'>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movieData={movie} />
          ))}
        </div>
      </div>
    </>
  );
}
