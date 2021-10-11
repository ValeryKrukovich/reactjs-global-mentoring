import React from "react";
import PropTypes from 'prop-types';
import { generateId } from '../../util/util'
import './Input.css';

export default function Input(props) {
    const id = generateId();

    return (
        <div>
            {props.label &&
                <label
                    for={id}
                    className='form-label'>
                    {props.label}
                </label>
            }
            {props.type === 'textarea'
                ? <textarea
                    id={id}
                    name={props.name}
                    rows={props.rows}
                    className='form-control'>
                    {props.placeholder}
                </textarea>
                : <input
                    id={id}
                    type={props.type}
                    name={props.name}
                    placeholder={props.placeholder}
                    className='form-control' />
            }
        </div>
    )
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    rows: PropTypes.string,
}

Input.defaultProps = {
    type: 'text',
    rows: '3',
}
