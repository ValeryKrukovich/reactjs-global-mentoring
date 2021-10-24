import React from 'react';
import PropTypes from 'prop-types';
import './AddMovieButton.css';

export default function AddMovieButton(props) {
    const onClickHahdler = () => {
        props.onClickHahdler();
    }

    return (
        <button
            className='add-button'
            type='button'
            onClick={onClickHahdler}>
            {props.title}
        </button>
    )
}

AddMovieButton.propTypes = {
    title: PropTypes.string.isRequired,
    onClickHahdler: PropTypes.func.isRequired,
}
