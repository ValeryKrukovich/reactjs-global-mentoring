import React from "react";
import PropTypes from 'prop-types';
import './MovieCard.css';

export default function MovieCard(props) {
    const onClickHahdler = (e) => {
        e.preventDefault();
        props.onClickHahdler(props.movie);
    }

    return (
        <li>
            <a
                className='movie__link'
                href='#'
                onClick={onClickHahdler}>
                <img
                    className='movie__image'
                    width='322'
                    height='455'
                    src={props.movie.poster}
                    alt=''/>
            </a>
            <div className='movie__content'>
                <div>
                    <h3 className='movie__head'>{props.movie.title}</h3>
                    <p className='movie__text'>{props.movie.genre}</p>
                </div>
                <div className='movie__year'>{props.movie.date}</div>
            </div>
        </li>
    )
}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number,
}
