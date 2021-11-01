import React from "react";
import PropTypes from 'prop-types';
import './MovieCard.css';

export default function MovieCard(props) {
    return (
        <li>
            <a className='movie__link' href='#'>
                <img
                    className='movie__image'
                    width='322'
                    height='455'
                    src={props.poster}
                    alt=''/>
            </a>
            <div className='movie__content'>
                <div>
                    <h3 className='movie__head'>{props.title}</h3>
                    <p className='movie__text'>{props.description}</p>
                </div>
                <div className='movie__year'>{props.date}</div>
            </div>
        </li>
    )
}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    year: PropTypes.number,
}
