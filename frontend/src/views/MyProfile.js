import MovieCategory from '../components/MovieCategory';
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

      <MovieCategory title='Liked List' movies={movies} />
      <MovieCategory title='Reviews' movies={movies} />
    </>
  );
}
