import React, {useEffect, useState} from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import AddMovieButton from '../AddMovieButton/AddMovieButton';
import Search from '../SearchMovie/SearchMovie';
import SuccessfulAddMovie from '../SuccessfulAddMovie/SuccessfulAddMovie';
import AddMovie from '../AddMovie/AddMovie';
import MovieDetails from '../MovieDetails/MovieDetails';

export default function Header(props) {
    // const [isOpen, setIsOpen] = useState(false);

    // const toogleAddMovie = () => {
    //     setIsOpen((prev) => !prev);
    // }

    // const hideDialog = () => {
    //     setIsOpen(false);
    // }

    // useEffect(() => {
    //     console.log('< = mounting');

    //     return () => {
    //         console.log('unmounting =>');
    //     }

    // });

    return (
        <>
            <header className='main-header'>
                <div className='main-header__panel'>
                    <Logo />
                    <AddMovieButton
                        title='+ Add movie'
                        onClickHahdler={props.toogleAddMovie} />
                </div>
                <Search
                    head='Find your movie'
                    placeholder='What do you want to watch?'
                    button='Search' />
            </header>
        </>
    )
}
