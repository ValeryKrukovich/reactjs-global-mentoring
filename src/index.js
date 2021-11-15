import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import App from './App';
import state from './store/state';
import store from './redux/store';
import { Provider } from 'react-redux';

console.log(store.getState())

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App state={state} store={store.getState()} />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
