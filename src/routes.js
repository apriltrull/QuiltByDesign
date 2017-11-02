import React from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import Main from './components/main';
import Heading from './components/Heading'; //now top level component

import Testimonials from './components/testimonials';
import Tips from './components/tips';
import Contact from './components/contact';
import Progress from './components/progress';
import  Introduction from './components/introduction';

import history from './history';

import './App.css';


export const makeMainRoutes = () => {
  return (
    <Router path="/main" history={history} component={Heading}>
      <div className="App">
        <Redirect from="/" to="/main" />

        <Route path="/main"         render={(props) => <Main {...props} />} />
        <Route path="/introduction" render={(props) => <Introduction {...props} />} />
        <Route path="/progress"     render={(props) => <Progress {...props} />} />
        <Route path="/testimonials"      render={(props) => <Testimonials {...props} />} />
        <Route path="/tips"        render={(props) => <Tips {...props }/>} />
        <Route path="/Contact"    render={(props) => <Contact {...props}/>} />

        }}/>
      </div>
    </Router>
  );
}
