import React, {useState} from "react";
import { FaSearch } from 'react-icons/fa';
import '../styles/SearchBar.css';

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSearch = (event) => {
      event.preventDefault();
      setSearchQuery('');
    }

    return (
        <div className="search-box">
            <form onSubmit={handleSearch}>
            <button className="btn-search"><FaSearch /></button>
            <input type="text" 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-search" 
            placeholder="Type to Search..." 
            />
            </form>
        </div>

    )
}

export default SearchBar;