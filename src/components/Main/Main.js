import React from 'react';
import './Main.css';
import MovieListErrorBoundary from '../MoviesList/MovieListErrorBoundary';
import MoviesList from '../MoviesList/MoviesList';
import FilterPanel from '../FilterPanel/FilterPanel';
import ConfirmDelete from '../ConfirmDelete/ConfirmDelete';
import MovieListContainer from '../MoviesList/MovieListContainer';

export default function Main(props) {
    return (
        <>
            <div className='main'>
                <MovieListErrorBoundary>
                    <FilterPanel />
                    <MovieListContainer onMovieClickHandler={props.onMovieClickHandler} />
                    {/* <MoviesList
                        movies={props.movies}
                        onMovieClickHandler={props.onMovieClickHandler} /> */}
                </MovieListErrorBoundary>
            </div>
            <ConfirmDelete />
        </>
    )
}
