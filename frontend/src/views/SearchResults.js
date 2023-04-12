import { useParams } from 'react-router-dom';
import moviePoster from '../assets/images/movieposter.png';
import NavBar from '../components/Navbar';
import MovieCard from '../components/ScreenplayCard';
import '../styles/SearchResults.css';

export default function SearchResults() {
  const users = new Array(5).fill(0); // 5 users
  const movies = new Array(12).fill(0); // 12 movies

  const { query: searchQuery } = useParams();

  return (
    <>
      <NavBar />

      <div className='search-results'>
        <div className='search-results-container'>
          <h2 className='container-title'>Users</h2>

          <div className='users-list'>
            {users.map((_, index) => (
              <div className='user-list' key={index}>
                <div className='user-image' />
                <h4 className='user-name'>Username</h4>
              </div>
            ))}
          </div>
        </div>

        <div className='search-results-container'>
          <h2 className='container-title'>Titles</h2>

          <div className='movies-list'>
            {movies.map((_, index) => (
              <MovieCard
                key={index}
                screenplay={{
                  title: 'Movie Title',
                  image: moviePoster,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
