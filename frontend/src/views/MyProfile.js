import MovieCard from '../components/ScreenplayCard';
import NavBar from '../components/Navbar';
import useMovies from '../hooks/useMovies';
import '../styles/MyProfile.css';
import ScreenplayList from './../components/ScreenplayList';

export default function MyProfile() {
  const movies = useMovies();
  console.log(movies)
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

      <ScreenplayList screenplays={movies} listTitle={"Liked Movies"} />
      <ScreenplayList screenplays={movies} listTitle={"Followed Movies"} />
    </>
  );
}
