import MovieCategory from '../components/MovieCategory';
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

      <MovieCategory title='Liked List' movies={movies} />
      <MovieCategory title='Reviews' movies={movies} />
    </>
  );
}
