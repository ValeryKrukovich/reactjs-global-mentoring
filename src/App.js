import React, {useState} from 'react';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import HeaderContainer from './containers/HeaderContainer';

function App(props) {
    const [selectedMovie, setSelectedMovie] = useState(null);

    const onMovieClickHahdler = (movie) => {
        setSelectedMovie(movie);
    }

    const onCloseMovie = () => {
        console.log('close');
        setSelectedMovie(null);
    }

    return (
        <>
            <React.StrictMode>
                <HeaderContainer
                    selectedMovie={selectedMovie}
                    onCloseMovie={onCloseMovie} />
                <Main
                    movies={props.state.movieList}
                    onMovieClickHahdler={onMovieClickHahdler} />
                <Footer />
                <div id='modal'></div>
            </React.StrictMode>
        </>
    );
}

export default App;
