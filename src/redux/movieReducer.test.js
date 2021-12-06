import { initialState, movieReducer, SET_MOVIE_LIST, SORT_MOVIE_LIST } from './movieReducer';

describe('movieReducer test', () => {
    const data = [{
        id: 1,
        title: 'Fifty Shades Freed',
        poster: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        date: 2018,
        genre: 'Comedy',
        rating: 8.9,
    }];

    test('set movie list', () => {
        expect(
            movieReducer(initialState, {
                type: SET_MOVIE_LIST,
                movieList: data,
            })
        ).toEqual({...initialState, movieList: data});
    });

    test('sort movie list', () => {
        expect(
            movieReducer(initialState,  {
                type: SORT_MOVIE_LIST,
                movieList: data,
                value: 'vote_average',
            })
        ).toEqual({...initialState, movieList: data, sortBy: 'vote_average'});
    });

    test('default', () => {
        expect(
            movieReducer(initialState, {})
        ).toEqual({...initialState});
    });
});