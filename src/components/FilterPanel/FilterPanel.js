import React from "react";
import './FilterPanel.css';

export default function FilterPanel() {
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
                <select className='sort-select__select'>
                    <option value='value1'>release date</option>
                    <option value='value2'>release date2</option>
                    <option value='value3'>release date 3</option>
                </select>
            </div>
        </div>
    )
}
