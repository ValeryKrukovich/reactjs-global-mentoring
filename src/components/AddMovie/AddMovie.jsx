import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Dialog from '../Dialog/Dialog';
import CheckboxList from '../CheckboxList/CheckboxList';
import './AddMovie.css';

export default function AddMovie(props) {
    const genreList = [

    ];

    const addMovie = () => {
        console.log('Click');
    }

    return (
        <Dialog
            head='Add movie'
            visible={true}
            hideDialog={props.hideDialog}>
            <form
                className='add-movie'
                noValidate>
                <div className='add-movie__form-grid'>
                    <Input
                        name='title'
                        label='Title'
                        placeholder='Title movie' />
                    <Input
                        name='release'
                        type='date'
                        label='Release date' />
                    <Input
                        name='url'
                        label='Movie url'
                        placeholder='https://' />
                    <Input
                        name='rating'
                        label='Rating'
                        placeholder='0.0' />
                    <CheckboxList
                        label='Genre'
                        name='genre' />
                    <Input
                        name='runtime'
                        label='Runtime'
                        placeholder='minutes' />
                </div>
                <Input
                    type='textarea'
                    name='overview'
                    label='Overview'
                    placeholder='Movie description' />
                <div  className='add-movie__btn-list'>
                    <Button name='Reset' type='reset' />
                    <Button name='Submit' type='button' onClickHandler={addMovie} />
                </div>
            </form>
        </Dialog>
    )
}
