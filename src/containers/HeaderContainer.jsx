import axios from 'axios';
import React, {useEffect, useState} from 'react';
import SuccessfulAddMovie from '../components/SuccessfulAddMovie/SuccessfulAddMovie';
import AddMovie from '../components/AddMovie/AddMovie';
import Header from '../components/Header/Header';

export default function HeaderContainer(props) {
    const [isOpen, setIsOpen] = useState(false);

    let selectedMovie = props.selectedMovie;

    const toogleAddMovie = () => {
        setIsOpen((prev) => !prev);
    }

    const hideDialog = () => {
        setIsOpen(false);
    }

    const addNewMovie = (values, actions) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            actions.resetForm();
            setIsOpen(false);
        }, 1000);
        axios.post('http://localhost:4000/movies', {
                title: values.title,
                release_date: values.release_date,
                poster_path: values.poster_path,
                vote_average: Number(values.vote_average),
                genres: values.genres,
                runtime: Number(values.runtime),
                overview: values.overview,
            })
            .then(function (response) {
                console.log(response);
                console.log(values);
            })
            .catch(function (error) {
                console.log(error);
                console.log(values);
            });
    }

    return (
        <>
            <Header toogleAddMovie={toogleAddMovie} />
            {isOpen && <AddMovie hideDialog={hideDialog} onSubmit={addNewMovie} />}
            <SuccessfulAddMovie />
        </>
    )
}
