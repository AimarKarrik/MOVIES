import MovieCard from '../components/MovieCard';
import NavBar from '../components/Navbar';
import useMovies from '../hooks/useMovies';
import '../styles/MyProfile.css';

export default function MyProfile() {
  const movies = useMovies();

  return (
    <>
      <NavBar />

      <div className='myProfile-container'>
        <div className='myProfile-picture' />

        <div className='myProfile-info'>
          <div className='myProfile-top'>
            <div className='myProfile-name'>Username</div>
            <div className='myProfile-bio'>Information about the user</div>
          </div>

          <div className='myProfile-buttons'>
            <button className='myProfile-button'>Followers</button>
            <button className='myProfile-button'>Following</button>
          </div>
        </div>
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
