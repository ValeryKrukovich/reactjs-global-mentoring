import React from 'react';
import Logo from '../Logo/Logo';
import './MovieDetails.css';

export default function MovieDetails() {

    return (
        <>
            <div className='movie-details'>
                <div className='main-header__panel'>
                    <Logo />
                    <button type='button' className='search-button'><img src='search.png' alt='' /></button>
                </div>
                <div className='movie-details__content'>
                    <div>
                        <img className='' src='./img/image.jpg' alt=''/>
                    </div>
                    <div>
                        <div className='movie-details__heading'>
                            <h1 className='movie-details__title'>Pulp Fiction</h1>
                            <span className='movie-details__rait'>8.9</span>
                        </div>
                        <p className='movie-details__genre'>Action & Adventure</p>
                        <div className='movie-details__info'>
                            <span>1994</span>
                            <span>2h 34min</span>
                        </div>
                        <p className='movie-details__desc'>Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra</p>
                    </div>
                </div>
            </div>
        </>
    )
}