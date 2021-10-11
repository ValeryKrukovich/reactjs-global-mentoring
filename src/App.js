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
                <div className=''>
                    <AddMovie />
                    <ConfirmDelete />
                    <SuccessfulAddMovie />
                </div>
            </React.StrictMode>
        </>
    );
}

export default App;
