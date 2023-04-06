import React, {useState} from "react";
import { FaSearch } from 'react-icons/fa';
import '../styles/SearchBar.css';

function SearchBar() {
    const [query, setQuery] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        handleSubmit();
      }

    return (
        <div className="search-box">
            <form onSubmit={handleSubmit}>
            <button className="btn-search"><FaSearch /></button>
            <input type="text" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)}
            className="input-search" 
            placeholder="Type to Search..." 
            />
            </form>
        </div>

    )
}

export default SearchBar;