import React, {useState} from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import AddMovieButton from '../AddMovieButton/AddMovieButton';
import Search from '../SearchMovie/SearchMovie';

export default function Header() {
    return (
        <header className='main-header'>
            <div className='main-header__panel'>
                <Logo />
                <AddMovieButton title='+ Add movie' />
            </div>
            <Search
                head='Find your movie'
                placeholder='What do you want to watch?'
                button='Search' />
        </header>
    )
}
