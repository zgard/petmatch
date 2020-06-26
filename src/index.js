import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pettype from './components/pettype';
import Dogsizes from './components/dogsizes';
import Dog from './components/dogs';
import Cat from './components/cats';
import * as serviceWorker from './serviceWorker';
import Cattypes from './components/cattypes';

ReactDOM.render(
  <React.StrictMode>
    <Pettype />
    <Dogsizes />
    <Cattypes />
    <Dog />
    <Cat />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
