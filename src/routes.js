import React from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import Callback from './CallBack/callback.js';
import Main from './components/main';
import Heading from './components/heading'; //now top level component
import Testimonials from './components/testimonials';
import Tips from './components/tips';
import Contact from './components/contact';
import Progress from './components/progress';
import History from './components/history';
import './App.css';



export const makeMainRoutes = () => {
  return (
    <Router path="/" history={History} component={Heading}>
      <div className="App">
        <Redirect from="/" to="/main" />
        <Route path="/"             render={(props) => <Heading  {...props} />} />
        <Route path="/main"         render={(props) => <Main {...props} />} />
        <Route path="/progress"     render={(props) => <Progress {...props} />} />
        <Route path="/testimonials"      render={(props) => <Testimonials {...props} />} />
        <Route path="/tips"        render={(props) => <Tips {...props }/>} />
        <Route path="/contact"    render={(props) => <Contact {...props}/>} />
        <Route path="/callback"     render={(props) => {return <Callback {...props} />}}/>
      </div>
    </Router>
  );
}
