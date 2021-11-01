import React from 'react';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import HeaderContainer from './containers/HeaderContainer';

function App(props) {
    return (
        <>
            <React.StrictMode>
                <HeaderContainer />
                <Main
                    movies={props.state.movieList} />
                <Footer />
                <div id='modal'></div>
            </React.StrictMode>
        </>
    );
}

export default App;
