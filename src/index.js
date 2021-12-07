import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
        <Provider store={store}>
            {/* <App state={state} store={store.getState()} /> */}
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
    document.getElementById("root")
);
