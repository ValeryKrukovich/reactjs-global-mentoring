import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Functional from './FunctionalComponent';
import Componenet from './Component';
import PureComponent from './PureComponent';
import reportWebVitals from './reportWebVitals';

const head = React.createElement(
  'h1',
  null,
  'Hello World!'
);

const root = React.createElement(
  'div',
  {className: 'container'},
  head,
  <Componenet />,
  <PureComponent />,
  <Functional />
);

ReactDOM.render(root, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
