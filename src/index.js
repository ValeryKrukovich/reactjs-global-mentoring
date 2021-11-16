import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import App from './App';
import state from './store/state';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            {/* <App state={state} store={store.getState()} /> */}
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
