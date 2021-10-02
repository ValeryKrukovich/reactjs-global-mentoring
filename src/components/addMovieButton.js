import React from 'react';
import PropTypes from 'prop-types';
import '../css/addMovieButton.css';

export default function AddMovieButton({title}) {
    return (
        <button className='add-button' type='button'>
            {title}
        </button>
    )
}

AddMovieButton.propTypes = {
    title: PropTypes.string.isRequired,
}