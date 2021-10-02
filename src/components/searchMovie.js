import React from 'react';
import PropTypes from 'prop-types';
import '../css/searchMovie.css';

export default function Search({head, placeholder, button}) {
    return (
        <form className='search-form'>
            <p className='search-form__head'>{head}</p>
            <input type='search' placeholder={placeholder}/>
            <button type='submit'>{button}</button>
        </form>
    )
}

Search.propTypes = {
    head: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
}