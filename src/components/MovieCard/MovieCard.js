import React from "react";
import PropTypes from 'prop-types';
import './MovieCard.css';

export default function MovieCard({title, description, year}) {
    return (
        <li>
            <a className='movie__link' href='#'>
                <img className='movie__image' src='./img/image.jpg' alt=''/>
            </a>
            <div className='movie__content'>
                <div>
                    <h3 className='movie__head'>{title}</h3>
                    <p className='movie__text'>{description}</p>
                </div>
                <div className='movie__year'>{year}</div>
            </div>
        </li>
    )
}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    year: PropTypes.number,
}
