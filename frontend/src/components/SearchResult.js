import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import '../styles/SearchResult.css';

function SearchResult({ searchTerm }) {
  const [movies, setMovies] = useState([]);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetch(`http://localhost:3001/movies?search=${searchTerm}&page=1&pageSize=10`)
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error(error));
  }, [searchTerm]);

  return (
    <div className='search-results-container'> 
      {filteredMovies.map(movie => (
        <MovieCard key={movie.id} movieData={movie} />
      ))}
    </div>
  );
}

export default SearchResult;

