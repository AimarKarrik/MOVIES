import React from 'react';
import '../assets/images/movieposter.png'
import MovieCard from '../components/MovieCard';
import NavBar from '../components/Navbar';
import '../styles/MainPage.css'

export default function MainPage() {
    const movies = [
        {
            title: 'The Shawshank Redemption',
            year: '1994',
            genre: 'Drama',
            rating: '9.3',
            ageRating: '18+',
            poster: '../assets/images/movieposter.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem.',
            quality: 'HD',
            seasonCount: '1',
            episodes: [
                {
                    id: 1,
                    title: 'Episode 1',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem.',
                },
                {
                    id: 2,
                    title: 'Episode 2',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem.',
                },
                {
                    id: 3,
                    title: 'Episode 3',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem.',
                }
            ]
        },
        {
            title: 'The Godfather',
            year: '1972',
            genre: 'Crime',
            rating: '9.2',
            ageRating: '18+',
            poster: '../assets/images/movieposter.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem.',
            quality: 'HD',
            seasonCount: '1',
            episodes: [
                {
                    id: 1,
                    title: 'Episode 1',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem.',
                },
                {
                    id: 2,
                    title: 'Episode 2',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem.',
                },
                {
                    id: 3,
                    title: 'Episode 3',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem.',
                }
            ]
        },
        {
            title: 'The Dark Knight',
            year: '2008',
            genre: 'Action',
            rating: '9.0',
            ageRating: '16+',
            poster: '../assets/images/movieposter.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem.',
            quality: 'HD',
            seasonCount: '1',
            episodes: [
                {
                    id: 1,
                    title: 'Episode 1',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem.',
                },
                {
                    id: 2,
                    title: 'Episode 2',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem.',
                },
                {
                    id: 3,
                    title: 'Episode 3',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem.',
                }
            ]
        },
        {
            title: 'The Lord of the Rings: The Return of the King',
            year: '2003',
            genre: 'Adventure',
            rating: '8.9',
            ageRating: '16+',
            poster: '../assets/images/movieposter.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem.',
            quality: 'HD',
            seasonCount: '1',
            episodes: [
                {
                    id: 1,
                    title: 'Episode 1',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem.',
                },
                {
                    id: 2,
                    title: 'Episode 2',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem.',
                },
                {
                    id: 3,
                    title: 'Episode 3',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nunc, vel aliquam nisl nunc vel lorem.',
                }
            ]
        }
    ]

    return (
        <>
            <NavBar />
            <div className='movie-category'>
                <h1 className='category-title'>Trending</h1>
                <div className='movie-card-container'>
                    {movies.map(movie => (
                        <MovieCard movieData={movie} />
                    ))}
                </div>
            </div>
            <div className='movie-category'>
                <h1 className='category-title'>New</h1>
                <div className='movie-card-container'>
                    {movies.map(movie => (
                        <MovieCard movieData={movie} />
                    ))}
                </div>
            </div>
            <div className='movie-category'>
                <h1 className='category-title'>For You</h1>
                <div className='movie-card-container'>
                    {movies.map(movie => (
                        <MovieCard movieData={movie} />
                    ))}
                </div>
            </div>
        </>
    )
}
