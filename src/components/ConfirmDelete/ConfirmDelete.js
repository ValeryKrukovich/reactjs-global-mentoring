import React from 'react';
import Dialog from '../Dialog/Dialog';
import Button from '../Button/Button';

export default function ConfirmDelete(props) {
    return (
        <Dialog head='Delete movie' size='small'>
            <p>Are you sure you want to delete this movie?</p>
            <Button name='Confirm' />
        </Dialog>
    )
}