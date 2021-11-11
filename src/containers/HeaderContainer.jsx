import React, {useEffect, useState} from 'react';
import SuccessfulAddMovie from '../components/SuccessfulAddMovie/SuccessfulAddMovie';
import AddMovie from '../components/AddMovie/AddMovie';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import Header from '../components/Header/Header';

export default function HeaderContainer(props) {
    const [isOpen, setIsOpen] = useState(false);
    // const [selectedMovie, setSelectedMovie] = useState(null);

    let selectedMovie = props.selectedMovie;

    const toogleAddMovie = () => {
        setIsOpen((prev) => !prev);
    }

    const hideDialog = () => {
        setIsOpen(false);
    }

    return (
        <>
            {selectedMovie ? (
                <MovieDetails
                    movie={selectedMovie}
                    onClickHahdler={props.onCloseMovie}/>
            ) : (
                <Header toogleAddMovie={toogleAddMovie} />
            )}
            {isOpen && <AddMovie hideDialog={hideDialog} />}
            <SuccessfulAddMovie />
        </>
    )
}
