import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SigninPage from './pages/Signin';

 
export default function App() {

  return (
    <Router>
      <Route path="/" exact component={Homepage} />
      <Route path="/signin" exact component={SigninPage} />
    </Router>
  );
}
