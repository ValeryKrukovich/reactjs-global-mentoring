import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import './Button.css';

export default function Button(props) {

    let buttonClass = classNames('button', {
        'button_primary': props.type !== 'reset',
        'button_empty': props.type === 'reset',
    });

    return (
        <button
            onClick={props.onClickHandler}
            className={buttonClass}
            type={props.type}>
            {props.name}
        </button>
    )
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string
}

Button.defaultProps = {
    type: 'button',
}
