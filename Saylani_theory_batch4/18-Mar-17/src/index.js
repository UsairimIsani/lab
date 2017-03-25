import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from "firebase";
  var config = {
    apiKey: "AIzaSyAahOKtI60F503DSxnruXFKpLGpyP8RqlM",
    authDomain: "reactapp-592d9.firebaseapp.com",
    databaseURL: "https://reactapp-592d9.firebaseio.com",
    storageBucket: "reactapp-592d9.appspot.com",
    messagingSenderId: "413974346396"
  };
  const Firebase = firebase.initializeApp(config);
export const db = Firebase.database();
export const auth = Firebase.auth();
export const strg = Firebase.storage(); 

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
