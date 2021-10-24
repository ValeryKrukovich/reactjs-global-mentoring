import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import App from './App';
import state from './store/state';

ReactDOM.render(
    <React.StrictMode>
        <App state={state} />
    </React.StrictMode>,
    document.getElementById("root")
);
