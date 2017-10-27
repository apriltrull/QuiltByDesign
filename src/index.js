import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main.js';
import Contact from './components/contact.js';
import './assets/stylesheets/index.css';
import Progress from './components/progress.js';
import Introduction from './components/introduction.js';
import Tips from './components/tips.js';


class Grit extends React.Component {
  render() {
    return (
      <div>
        <Main />
        <Introduction/>

        <div className="statsMainContainer">
          <h1 className='orange stats'> Meet Your Professional Longarm Quilting Team </h1>
            <div className="flexWrapper">

            </div>
          </div>

         <Progress/>
         <Testimonial/>
         <Tips/>
        <Contact />
      </div>
    );
  }
}

ReactDOM.render(
  <Grit/>,
  document.querySelector('#root'));
