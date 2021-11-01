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
                        title={movie.title}
                        description={movie.description}
                        poster={movie.poster}
                        date={movie.year}
                        key={movie.id} />
                ))}
            </ul>
        </>
    )
}
