import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { refreshMovieListAC } from '../../redux/movieReducer';
import './FilterPanel.css';

export default function FilterPanel() {

    // const onHandleSortOptionChange = (e) => {
    //     const value = e.target.value;
    //     console.log(value);
    // };
    const dispatch = useDispatch();


    const onHandleSortOptionChange = useCallback((e) => {
        const value = e.target.value;
        dispatch(refreshMovieListAC(value));
      }, [dispatch]);
    return (
        <div className='filter-panel'>
            <div className='button-list'>
                <button type='button' className='button-list__button button-list__button_active'>All</button>
                <button type='button' className='button-list__button'>Documentary</button>
                <button type='button' className='button-list__button'>Comedy</button>
                <button type='button' className='button-list__button'>Horror</button>
                <button type='button' className='button-list__button'>Crime</button>
            </div>
            <div className='sort-select'>
                <label className='sort-select__label'>Sort by</label>
                {/* <select className='sort-select__select'>
                    <option value='value1'>release date</option>
                    <option value='value2'>release date2</option>
                    <option value='value3'>release date 3</option>
                </select> */}
                <select
                    onChange={onHandleSortOptionChange}>
                    <option value='release_date'>By date</option>
                    <option value='vote_average'>By rating</option>
                </select>
            </div>
        </div>
    )
}
