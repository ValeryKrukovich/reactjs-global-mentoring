import React from 'react';
import Logo from '../Logo/Logo';
import './MovieDetails.css';

export default function MovieDetails(props) {
    const onClickHandler = () => {
        props.onClickHahdler();
    }

    return (
        <>
            <div className='movie-details'>
                <div className='main-header__panel'>
                    <Logo />
                    <button
                        type='button'
                        className='search-button'
                        onClick={onClickHandler}>
                        <img src='search.png' alt='' />
                    </button>
                </div>
                <div className='movie-details__content'>
                    <div className='movie-details__image'>
                        <img src={props.movie.poster} width='323' height='486' alt=''/>
                    </div>
                    <div>
                        <div className='movie-details__heading'>
                            <h1 className='movie-details__title'>{props.movie.title}</h1>
                            <span className='movie-details__rait'>{props.movie.rating}</span>
                        </div>
                        <p className='movie-details__genre'>{props.movie.genre}</p>
                        <div className='movie-details__info'>
                            <span>{props.movie.date}</span>
                            <span>2h 34min</span>
                        </div>
                        <p className='movie-details__desc'>{props.movie.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}