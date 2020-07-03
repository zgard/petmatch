import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};
firebase.initializeApp(firebaseConfig);

const initialState = {
  doggo: 0,
  kittycat: 0,
  bigBold: 0,
  medium: 0,
  lapSize: 0,
  tiny: 0,
  bigkind: 0,
  sassy: 0,
  hypoaller: 0,
  exotic: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DOGGO':
      return {
        ...state,
        doggo: state.doggo + action.payload.points
      }
    case 'KITTYCAT':
      return {
        ...state,
        kittycat: state.kittycat + action.payload.points
      }
      case 'BIGBOLD':
      return {
        ...state,
        bigBold: state.bigBold + action.payload.points
      }
      case 'MEDIUM':
      return {
        ...state,
        medium: state.medium + action.payload.points
      }
      case 'LAPSIZE':
      return {
        ...state,
        lapSize: state.lapSize + action.payload.points
      }
      case 'TINY':
      return {
        ...state,
        tiny: state.tiny + action.payload.points
      }
      case 'BIGKIND':
      return {
        ...state,
        bigkind: state.bigkind + action.payload.points
      }
      case 'SASSY':
      return {
        ...state,
        sassy: state.sassy + action.payload.points
      }
      case 'HYPOALLER':
      return {
        ...state,
        hypoaller: state.hypoaller + action.payload.points
      }
      case 'EXOTIC':
      return {
        ...state,
        exotic: state.exotic + action.payload.points
      }
    default:
      return state;
  }
}

const store = createStore(reducer);


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
