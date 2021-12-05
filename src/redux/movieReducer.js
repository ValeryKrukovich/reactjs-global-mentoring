import axios from 'axios';

const SET_MOVIE_LIST = 'SET_MOVIE_LIST';
const SORT_MOVIE_LIST = 'SORT_MOVIE_LIST';

export const initialState = {
    movieList:  [
        // {
            // id: 1,
            // title: 'Fifty Shades Freed',
            // poster: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
            // description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            // date: 2018,
            // genre: 'Comedy',
            // rating: 8.9,
        // },
        // {
        //     id: 2,
        //     title: 'Tomb Raider',
        //     poster: 'https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg',
        //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        //     date: 2018,
        //     genre: 'Comedy',
        //     rating: 8.9,
        // },
        // {
        //     id: 3,
        //     title: 'Star Wars: The Last Jedi',
        //     poster: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
        //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        //     date: 2018,
        //     genre: 'Comedy',
        //     rating: 8.9,
        // },
        // {
        //     id: 4,
        //     title: 'Black Panther',
        //     poster: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
        //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        //     date: 2018,
        //     genre: 'Comedy',
        //     rating: 8.9,
        // },
        // {
        //     id: 5,
        //     title: 'The celebration of a lifetime',
        //     poster: 'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
        //     description: 'Action & Adventure',
        //     date: 2018,
        //     genre: 'Comedy',
        //     rating: 8.9,
        // },
        // {
        //     id: 6,
        //     title: 'Ready Player One',
        //     poster: 'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg',
        //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        //     date: 2018,
        //     genre: 'Comedy',
        //     rating: 8.9,
        // },
    ],
    sortBy: 'release_date',
};

export const movieReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MOVIE_LIST:
            return {
                ...state,
                movieList: action.movieList,
            }
        case SORT_MOVIE_LIST:
            return {
                ...state,
                movieList: action.movieList,
                sortBy: action.value,
            }
        default:
            return state;
    }
};

export const setMovieListAC = (movieList, flag) => {
    if (flag) {
        return ({
            type: SET_MOVIE_LIST,
            movieList: movieList.reverse(),
        })
    }
    return ({
        type: SET_MOVIE_LIST,
        movieList,
    })
}

export const sortMovieListAC = (movieList, value) => {
    return ({
        type: SORT_MOVIE_LIST,
        movieList,
        value,
    })
}

export const fetchMovieListAC = () => {
    return (dispatch, getState) => {
        const sortBy = getState().movies.sortBy;
        axios.get(`http://localhost:4000/movies?sortOrder=desc&sortBy=${sortBy}]`).then(response => {
            const action = setMovieListAC(response.data.data, false);
            dispatch(action);
        });
    }
}

export const refreshMovieListAC = (value) => {
    return (dispatch) => {
        axios.get(`http://localhost:4000/movies?sortOrder=desc&sortBy=${value}`).then(response => {
            const action = sortMovieListAC(response.data.data, value);
            dispatch(action);
        });
    }
}

// export default movieReducer;