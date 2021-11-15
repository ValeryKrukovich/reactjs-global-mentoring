import React from "react";
import { connect } from "react-redux";
import MoviesList from "./MoviesList";
import { setMovieListAC, fetchMovieListAC } from '../../redux/movieReducer';

const mapStateToProps = (state) => {
    return {
        movies: state.movies.movieList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // setMovies: (movieList) => {
        //     dispatch(setMovieListAC(movieList));
        // },
        fetchMovieList: () => {
            dispatch(fetchMovieListAC());
        },
    }
}


const MovieListContainer = connect(mapStateToProps, mapDispatchToProps)(MoviesList);

export default MovieListContainer;