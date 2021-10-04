import React from 'react';
import PropTypes from 'prop-types';
import '../css/searchMovie.css';

export default function Search({head, placeholder, button}) {
    return (
        <form className='search-form'>
            <p className='search-form__head'>{head}</p>
            <div className='search-form__block'>
                <input className='search-form__input' type='search' placeholder={placeholder}/>
                <button className='search-form__button' type='submit'>{button}</button>
            </div>
        </form>
    )
}

Search.propTypes = {
    head: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
}