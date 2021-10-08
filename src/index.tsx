import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import Footer from './components/footer';
import Main from './components/main';
import Header from './components/header';

const App = () => {
    return (
        <>
            <React.StrictMode>
                <Header />
                <Main />
                <Footer />
            </React.StrictMode>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
