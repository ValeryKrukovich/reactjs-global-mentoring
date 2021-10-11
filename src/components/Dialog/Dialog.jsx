import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import './Dialog.css';

function Dialog(props) {
    let modalDialogClass = classNames('modal-dialog', {
        'modal-dialog__big': props.size === 'big',
        'modal-dialog__small': props.size === 'small',
    });

    if (!props.visible) {
        return null;
    }

    return (
        <div className='wrapper-dialog'>
            <div className={modalDialogClass}>
                <button
                    type='button'
                    title='close modal'
                    className='modal-dialog__close'>
                </button>
                {props.head && <h2 className='modal-dialog__head'>{props.head}</h2>}
                {props.children}
            </div>
        </div>
    )
}

Dialog.propTypes = {
    head: PropTypes.string,
    size: PropTypes.string,
    visible: PropTypes.bool,
}

Dialog.defaultProps = {
    size: 'big',
    visible: false,
}

export default Dialog;
