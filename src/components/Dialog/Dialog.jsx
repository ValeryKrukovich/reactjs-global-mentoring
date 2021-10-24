import React from "react";
import ReactDOM from 'react-dom';
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

    const modalWrapp = document.getElementById('modal');
    const modal = (
        <div className='wrapper-dialog'>
            <div className={modalDialogClass}>
                <button
                    type='button'
                    title='close modal'
                    className='modal-dialog__close'
                    onClick={props.hideDialog}>
                </button>
                {props.head && <h2 className='modal-dialog__head'>{props.head}</h2>}
                {props.children}
            </div>
        </div>
    );

    return ReactDOM.createPortal(modal, modalWrapp);
}

Dialog.propTypes = {
    head: PropTypes.string,
    size: PropTypes.string,
    visible: PropTypes.bool,
    hideDialog: PropTypes.func,
}

Dialog.defaultProps = {
    size: 'big',
    visible: false,
}

export default Dialog;
