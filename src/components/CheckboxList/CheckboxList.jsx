import React from "react";
// import './CheckboxList.css';

export function CheckboxList(props) {
    return (
        <fieldset className='checkbox-list'>
            <legend className='checkbox-list__legend'>
                {props.label}
            </legend>
            <ul className='checkbox-list__list'>
                <li>
                    <input type='checkbox' name={props.name} value='Crime' id='Crime' onChange={props.onChange} />
                    <label htmlFor='Crime'>
                        Crime
                    </label>
                </li>
                <li>
                    <input type='checkbox' name={props.name} value='Documentary' id='Documentary' onChange={props.onChange} />
                    <label htmlFor='Documentary'>
                        Documentary
                    </label>
                </li>
                <li>
                    <input type='checkbox' name={props.name} value='Horror' id='Horror' onChange={props.onChange} />
                    <label htmlFor='Horror'>
                        Horror
                    </label>
                </li>
                <li>
                    <input type='checkbox' name={props.name} value='Comedy' id='Comedy' onChange={props.onChange} />
                    <label htmlFor='Comedy'>
                        Comedy
                    </label>
                </li>
            </ul>
        </fieldset>
    )
}
