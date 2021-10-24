import React from "react";
import './CheckboxList.css';

export default function CheckboxList(props) {
    return (
        <fieldset className='checkbox-list'>
            <legend className='checkbox-list__legend'>
                {props.label}
            </legend>
            <ul className='checkbox-list__list'>
                <li>
                    <input type='checkbox' name='genre' value='' id='Crime' />
                    <label htmlFor='Crime'>
                        Crime
                    </label>
                </li>
                <li>
                    <input type='checkbox' name='genre' value='' id='Documentary' />
                    <label htmlFor='Documentary'>
                        Documentary
                    </label>
                </li>
                <li>
                    <input type='checkbox' name='genre' value='' id='Horror' />
                    <label htmlFor='Horror'>
                        Horror
                    </label>
                </li>
                <li>
                    <input type='checkbox' name='genre' value='' id='Comedy' />
                    <label htmlFor='Comedy'>
                        Comedy
                    </label>
                </li>
            </ul>
        </fieldset>
    )
}
