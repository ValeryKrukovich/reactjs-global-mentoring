import React from 'react';
import '../css/main.css';
import MovieListErrorBoundary from './movieListErrorBoundary';
import MoviesList from './moviesList';
import FilterPanel from './filterPanel';

export default function Main() {
    return (
        <div className='main'>
            <MovieListErrorBoundary>
                <FilterPanel />
                <MoviesList />
            </MovieListErrorBoundary>
        </div>
    )
}