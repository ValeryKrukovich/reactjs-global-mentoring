import React from 'react';
import './Main.css';
import MovieListErrorBoundary from '../MoviesList/MovieListErrorBoundary';
import MoviesList from '../MoviesList/MoviesList';
import FilterPanel from '../FilterPanel/FilterPanel';
import ConfirmDelete from '../ConfirmDelete/ConfirmDelete';

export default function Main() {
    return (
        <>
            <div className='main'>
                <MovieListErrorBoundary>
                    <FilterPanel />
                    <MoviesList />
                </MovieListErrorBoundary>
            </div>
            <ConfirmDelete />
        </>
    )
}
