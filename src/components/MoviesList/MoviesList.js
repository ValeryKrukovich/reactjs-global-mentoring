import React from "react";
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

export default function MoviesList(props) {
    return (
        <>
            <p className='count-movies'><span>{props.movies.length}</span> movies found</p>
            <ul className='movie-list'>
                {props.movies.map((movie) => (
                    <MovieCard
                        movie={movie}
                        onClickHandler={props.onMovieClickHandler}
                        key={movie.id} />
                ))}
            </ul>
        </>
    )
}
