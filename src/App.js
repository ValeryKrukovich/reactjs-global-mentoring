import React from 'react';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

function App() {
    return (
        <>
            <React.StrictMode>
                <Header />
                <Main />
                <Footer />
                <div id='modal'></div>
            </React.StrictMode>
        </>
    );
}

export default App;
