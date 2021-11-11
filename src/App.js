import React, {useState, useCallback} from 'react';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import HeaderContainer from './containers/HeaderContainer';

let linkToOnMovieClickHandler = null;

function App(props) {
    const [selectedMovie, setSelectedMovie] = useState(null);

    // const onMovieClickHandler = (movie) => {
    //     setSelectedMovie(movie);
    // }

    const onMovieClickHandler = useCallback((movie) => {
        setSelectedMovie(movie);
    }, [])

    const onCloseMovie = () => {
        console.log('close');
        setSelectedMovie(null);
    }

    if (onMovieClickHandler !== linkToOnMovieClickHandler) {
        console.log(onMovieClickHandler, linkToOnMovieClickHandler);
        linkToOnMovieClickHandler = onMovieClickHandler;
    }

    return (
        <>
            <React.StrictMode>
                <HeaderContainer
                    selectedMovie={selectedMovie}
                    onCloseMovie={onCloseMovie} />
                <Main
                    movies={props.state.movieList}
                    onMovieClickHandler={onMovieClickHandler} />
                <Footer />
                <div id='modal'></div>
            </React.StrictMode>
        </>
    );
}

export default App;
