import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Dialog from '../Dialog/Dialog';
import CheckboxList from '../CheckboxList/CheckboxList';
import './AddMovie.css';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

// const SignupSchema = Yup.object().shape({
//     title: Yup.string().required('Title is required'),
//     release_date: Yup.string().required('Release date is required'),
//     poster_path: Yup.string().url().required('Poster is required'),
//     genres: Yup.array().required('Genres is required'),
//     vote_average: Yup.number().max(10).min(0).required('Vote average is required'),
//     runtime: Yup.number().min(0).required('Title is required'),
//     overview: Yup.string().required('Overview is required'),
//   });

export default function AddMovie(props) {
    // const genreList = [];

    // const addMovie = () => {
    //     console.log('Click');
    // }

    const resetHandler = (formikProps) => {
        formikProps.setValues({});
    }

    return (
        <Dialog
            head='Add movie'
            visible={true}
            hideDialog={props.hideDialog}>

            <Formik
                initialValues={{
                    title: '',
                    release_date: '',
                    poster_path: '',
                    vote_average: 0,
                    genres: [],
                    runtime: 0,
                    overview: '',
                }}
                // validationSchema={SignupSchema}
                onSubmit={props.onSubmit}
            >
                {props => (
                    <form
                        onSubmit={props.handleSubmit}
                        className='add-movie'
                        noValidate>
                        <div className='add-movie__form-grid'>
                            <Input
                                name='title'
                                label='Title'
                                placeholder='Title movie'
                                onChange={props.handleChange}
                                value={props.values.title} />
                            {props.errors.title && props.touched.title && <div>{props.errors.title}</div>}
                            <Input
                                name='release_date'
                                type='date'
                                label='Release date'
                                onChange={props.handleChange}
                                value={props.values.release_date} />
                            <Input
                                name='poster_path'
                                label='Movie url'
                                placeholder='https://'
                                onChange={props.handleChange}
                                value={props.values.poster_path} />
                            <Input
                                name='vote_average'
                                label='Rating'
                                placeholder='0.0'
                                onChange={props.handleChange}
                                value={props.values.vote_average} />
                            {/* <ul className='checkbox-list__list'>
                                <li>
                                    <Field type="checkbox" name="genres" value="One" id='Crime' />
                                    <label htmlFor='Crime'>
                                        Crime
                                    </label>
                                </li>
                            </ul> */}
                            <CheckboxList
                                label='Genre'
                                name='genres'
                                onChange={props.handleChange}
                                value={props.values.genres} />
                            <Input
                                name='runtime'
                                label='Runtime'
                                placeholder='minutes'
                                onChange={props.handleChange}
                                value={props.values.runtime} />
                        </div>
                        <Input
                            type='textarea'
                            name='overview'
                            label='Overview'
                            placeholder='Movie description'
                            onChange={props.handleChange}
                            value={props.values.overview} />
                        <div  className='add-movie__btn-list'>
                            <Button name='Reset' type='button' />
                            <Button
                                name='Submit'
                                type='submit' />
                        </div>
                    </form>
                )}
            </Formik>
        </Dialog>
    )
}
