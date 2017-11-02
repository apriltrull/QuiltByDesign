import React from 'react';
import ReactDOM from 'react-dom';
import NavComponent from './components/heading.js';
import Main from './components/main.js';
import Contact from './components/contact.js';
import './assets/stylesheets/index.css';
import Progress from './components/progress.js';
import Introduction from './components/introduction.js';
import Tips from './components/tips.js';
import Testimonials from './components/testimonials.js';

class Grit extends React.Component {
  render() {
    return (
      <div>
        <NavComponent/>
        <Main />
        <Introduction/>


         <Progress/>
         <Testimonials/>
         <Tips/>
        <Contact />
      </div>
    );
  }
}

ReactDOM.render(
  <Grit/>,
  document.querySelector('#root'));
