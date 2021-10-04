import React from "react";
import MovieCard from './movieCard';

let movies = [
    {
        id: 1,
        title: 'Pulp Fiction',
        description: 'Action & Adventure',
        year: 2004,
    },
    {
        id: 2,
        title: 'Pulp Fiction',
        description: 'Action & Adventure',
        year: 2004,
    },
    {
        id: 3,
        title: 'Pulp Fiction',
        description: 'Action & Adventure',
        year: 2004,
    },
    {
        id: 4,
        title: 'Pulp Fiction',
        description: 'Action & Adventure',
        year: 2004,
    },
    {
        id: 5,
        title: 'Pulp Fiction',
        description: 'Action & Adventure',
        year: 2004,
    },
    {
        id: 6,
        title: 'Pulp Fiction',
        description: 'Action & Adventure',
        year: 2004,
    },
];

export default function MoviesList() {
    return (
        <>
            <p className='count-movies'><span>{movies.length}</span> movies found</p>
            <ul className='movie-list'>
                {movies.map((movie) => (
                    <MovieCard
                        title={movie.title}
                        description={movie.description}
                        year={movie.year}
                        key={movie.id} />
                ))}
            </ul>
        </>
    )
}
