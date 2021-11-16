import React from "react";
import PropTypes from 'prop-types';
import './MovieCard.css';
import { formatGenres } from '../../util/util';

export default function MovieCard(props) {
    const onClickHandler = (e) => {
        e.preventDefault();
        props.onClickHandler(props.movie);
    }

    return (
        <li>
            <a
                className='movie__link'
                href='#'
                onClick={onClickHandler}>
                <img
                    className='movie__image'
                    width='322'
                    height='455'
                    src={props.movie.poster_path}
                    alt=''/>
            </a>
            <div className='movie__content'>
                <div>
                    <h3 className='movie__head'>{props.movie.title}</h3>
                    <p className='movie__text'>{formatGenres(props.movie.genres)}</p>
                </div>
                <div className='movie__year'>{new Date(props.movie.release_date).getFullYear()}</div>
            </div>
        </li>
    )
}

// MovieCard.propTypes = {
//     title: PropTypes.string.isRequired,
//     genre: PropTypes.string.isRequired,
//     date: PropTypes.number,
// }
