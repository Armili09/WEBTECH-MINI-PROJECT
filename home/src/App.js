import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import AdmissionForm from './components/pages/AdmissionForm';
import test from './components/pages/test'
import marks from './components/pages/marks'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/reg' component={AdmissionForm} />
          <Route path='/test' component={test} />
          <Route path='/marks' component={marks} />
        </Switch>
      </Router>
    </>
  );
}

export default App;


