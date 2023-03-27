import React from 'react';
import '../styles/MovieList.css';

export default function MovieCategory({ title }) {
  return (
    <div className="movie-category">
      <h1 className="category-title">{title}</h1>
      <div className="category-line" />
    </div>
  );
}
