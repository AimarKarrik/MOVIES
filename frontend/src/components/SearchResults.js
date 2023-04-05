import React, {useEffect, useState} from 'react';
import MovieCard from './MovieCard';

const SearchResults = (search) => {
    const [searchScreenplays, setSearchScreenplays] = useState([]);
    const searchQuery = new URLSearchParams(search).get('query');
    
    useEffect(()=> {
        async function fetchSearchScreenplays() {
        const response = await fetch(`http://localhost:3001/screenplays/search?q=${searchQuery}`);
        const data = await response.json();
        setSearchScreenplays(data);
        }
        fetchSearchScreenplays();
    }, [searchQuery]);


    return (
        <div>
            <h2>Search Results "{searchQuery}"</h2>
            {searchScreenplays.map((movie) => (
                <MovieCard key={movie.id} movieData={movie} />
            ))}
        </div>
    )
}

export default SearchResults;