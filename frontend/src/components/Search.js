import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/Search.css';
import SearchResults from './SearchResult';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/movies?page=1&pageSize=10")
      .then(response => response.json())
      .then(data => {
        const filteredMovies = data.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setMovies(filteredMovies);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="search-box">
    <form onSubmit={handleSubmit}>
            <button className="btn-search" type="submit"><FaSearch /></button>
            <input type="text" value={searchTerm} className="input-search" placeholder="Type to Search..." onChange={handleSearch}></input>
        </form>
        <SearchResults movies={movies} searchTerm={searchTerm} />
  </div>
);
}

export default Search;
