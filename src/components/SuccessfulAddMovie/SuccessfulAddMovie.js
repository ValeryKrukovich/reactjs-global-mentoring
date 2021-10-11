import React from 'react';
import Dialog from '../Dialog/Dialog';
import './SuccessfulAddMovie.css';

export default function SuccessfulAddMovie(props) {
    return (
        <Dialog size='small' head='congratulations!'>
            <p>The movie has been added to database successfully</p>
        </Dialog>
    )
}