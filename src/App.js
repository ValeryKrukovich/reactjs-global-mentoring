import React from 'react';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import AddMovie from './components/AddMovie/AddMovie';
import ConfirmDelete from './components/ConfirmDelete/ConfirmDelete';
import SuccessfulAddMovie from './components/SuccessfulAddMovie/SuccessfulAddMovie';

function App() {
    return (
        <>
            <React.StrictMode>
                <Header />
                <Main />
                <Footer />
                <AddMovie />
                <ConfirmDelete />
                <SuccessfulAddMovie />
            </React.StrictMode>
        </>
    );
}

export default App;