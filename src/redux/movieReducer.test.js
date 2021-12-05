import axios from 'axios';
import { initialState, movieReducer, fetchMovieListAC, setMovieListAC } from './movieReducer';
import { screen } from '@testing-library/react';

describe('movieReducer test', () => {
    test('set movie list', () => {
        // const data = await axios.get(`http://localhost:4000/movies`);
        const data = [{
                id: 1,
                title: 'Fifty Shades Freed',
                poster: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                date: 2018,
                genre: 'Comedy',
                rating: 8.9,
        }];
        screen.debug();
        expect(
            movieReducer(initialState, setMovieListAC(data, false))
        ).toEqual({...initialState, movieList: data});
    });
});