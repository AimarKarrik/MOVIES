import { useEffect, useState } from 'react';

export default function useMovies(options = { page: 1, pageSize: 20 }) {
  const [movies, setMovies] = useState([]);

  const { page, pageSize } = options;

  useEffect(() => {
    fetch(`http://localhost:3001/screenplays?page=${page}&pageSize=${pageSize}`, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => setMovies(data.data));
  }, [page, pageSize]);


  return movies;
}
