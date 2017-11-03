import React from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import Heading from './components/heading'; //now top level component
import Main from './components/main';
import Tips from './components/tips';
import Contact from './components/contact';
import Progress from './components/progress';
import  Testimonials from './components/testimonials';
import History from './components/history';
import './App.css';



export const makeMainRoutes = () => {
  return (
    <Router path="/main" history={History} component={Heading}>
      <div className="App">
      
        <Route path="/"             render={(props) => <Heading {...props} />} />
        <Router path="main"    render = {(props)}  => <Main {...props} /> />
        <Route path="/progress"     render={(props) => <Progress {...props} />} />
        <Route path="/testimonials"      render={(props) => <Testimonials {...props} />} />
        <Route path="/tips"        render={(props) => <Tips {...props }/>} />
        <Route path="/contact"    render={(props) => <Contact {...props}/>} />

      </div>
    </Router>
  );
}
