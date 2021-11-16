import React, {useState, useCallback} from 'react';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import HeaderContainer from './containers/HeaderContainer';

function App(props) {
    const [selectedMovie, setSelectedMovie] = useState(null);

    const onMovieClickHandler = useCallback((movie) => {
        setSelectedMovie(movie);
    }, [])

    const onCloseMovie = () => {
        setSelectedMovie(null);
    }

    return (
        <>
            <React.StrictMode>
                <HeaderContainer
                    selectedMovie={selectedMovie}
                    onCloseMovie={onCloseMovie} />
                {/* <Main
                    // movies={props.state.movieList}
                    movies={props.store.movies.movieList}
                    onMovieClickHandler={onMovieClickHandler} /> */}
                    <Main
                    // movies={props.state.movieList}
                    // movies={props.store.movies.movieList}
                    onMovieClickHandler={onMovieClickHandler} />
                <Footer />
                <div id='modal'></div>
            </React.StrictMode>
        </>
    );
}

export default App;
