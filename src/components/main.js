import React from 'react';
import '../css/main.css';
import MovieListErrorBoundary from './movieListErrorBoundary';
import MoviesList from './moviesList';

export default function Main() {
    return (
        <div className='main'>
            <MovieListErrorBoundary>
                <MoviesList />
            </MovieListErrorBoundary>
        </div>
    )
}