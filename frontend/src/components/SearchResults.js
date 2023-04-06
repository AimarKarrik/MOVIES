import React, { useState} from 'react';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';

function SearchResults () {
    const [query, setQuery] = useState([]);
    const [results, setResults] = useState([]);

    async function handleSearch() {
        try{ 
        const response = await fetch(`http://localhost:3001/screenplays/search?q=${query}`);
        const data = await response.json();
        setResults(data);
        } catch (error) {
            console.log(error);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleSearch();
    }

    return (
        <div>
            <SearchBar onSearch={handleSubmit} />
            <div>
            {results.map((movie) => (
                <MovieCard key={movie.id} movieData={movie} />
            ))}
        </div>
        </div>
    )
}

export default SearchResults;