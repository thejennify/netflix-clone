import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { GlobalStyles } from './global-styles';
import { firebase } from "./lib/firebase";
import {FirebaseContext} from './context/firebase';

render(
  <FirebaseContext.Provider value={{firebase}}>
    <GlobalStyles />
    <App />
  </FirebaseContext.Provider> ,
  document.getElementById('root')
);

