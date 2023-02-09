import React from 'react';
import '../assets/images/movieposter.png'
import MovieCard from '../components/MovieCard';
import NavBar from '../components/Navbar';
import '../styles/MainPage.css'

export default function MainPage() {

    return (
        <>
            <NavBar />
            <div className='movie-category'>
                <h1 className='category-title'>Trending</h1>
                <div className='movie-card-container'>
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </div>
            <div className='movie-category'>
                <h1 className='category-title'>New</h1>
                <div className='movie-card-container'>
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </div>
            <div className='movie-category'>
                <h1 className='category-title'>For You</h1>
                <div className='movie-card-container'>
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </div>
        </>
    )
}
