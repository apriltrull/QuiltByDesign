import React from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import Main from './components/main';
import Heading from './components/Heading'; //now top level component
import Callback from './CallBack/Callback';
import Testimonials from './components/testimonials';
import Tips from './components/tips';
import Contact from './components/contact';
import Gallery from './components/progress';
import  Introduction from './components/introduction';

import history from './history';

import './App.css';


export const makeMainRoutes = () => {
  return (
    <Router path="/main" history={history} component={Heading}>
      <div className="App">
        <Redirect from="/" to="/main" />

        <Route path="/main"         render={(props) => <Home {...props} />} />
        <Route path="/introduction" render={(props) => <Professional Team {...props} />} />
        <Route path="/progress"     render={(props) => <Gallery {...props} />} />
        <Route path="/testimonials"      render={(props) => <Testimonials {...props} />} />
        <Route path="/tips"        render={(props) => <Creative Tips {...props }/>} />
        <Route path="/Contact"    render={(props) => <Contact {...props}/>} />

          return <Callback {...props} />
        }}/>
      </div>
    </Router>
  );
}
