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
                    htmlFor={id}
                    className='form-label'>
                    {props.label}
                </label>
            }
            {props.type === 'textarea'
                ? <textarea
                    id={id}
                    name={props.name}
                    rows={props.rows}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    className='form-control'>
                </textarea>
                : <input
                    id={id}
                    type={props.type}
                    name={props.name}
                    placeholder={props.onChange}
                    className='form-control'
                    onChange={props.onChange} />
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
