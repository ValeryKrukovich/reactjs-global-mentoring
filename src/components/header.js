import React, {useState} from 'react';
import '../css/header.css';
import Logo from './logo';
import AddMovieButton from './addMovieButton';
import Search from './searchMovie';

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
