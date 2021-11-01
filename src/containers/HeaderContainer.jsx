import React, {useEffect, useState} from 'react';
import Logo from '../components/Logo/Logo';
import AddMovieButton from '../components/AddMovieButton/AddMovieButton';
import Search from '../components/SearchMovie/SearchMovie';
import SuccessfulAddMovie from '../components/SuccessfulAddMovie/SuccessfulAddMovie';
import AddMovie from '../components/AddMovie/AddMovie';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import Header from '../components/Header/Header';

export default function HeaderContainer() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const toogleAddMovie = () => {
        setIsOpen((prev) => !prev);
    }

    const hideDialog = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        console.log('< = mounting');

        return () => {
            console.log('unmounting =>');
        }

    });

    return (
        <>
            {selectedMovie ? (
                <MovieDetails />
            ) : (
                <Header toogleAddMovie={toogleAddMovie} />
            )}
            {isOpen && <AddMovie hideDialog={hideDialog} />}
            <SuccessfulAddMovie />
        </>
    )
}