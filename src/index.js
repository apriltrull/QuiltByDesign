import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main.js';
import Contact from './components/contact.js';
import './assets/stylesheets/index.css';
import Progress from './components/progress.js';
import Introduction from './components/introduction.js';

class Grit extends React.Component {
  render() {
    return (
      <div>
        <Main />

        <div className="statsMainContainer">
          <h1 className='orange stats'> Professional Design, Your Way </h1>
            <div className="flexWrapper">


            </div>
          </div>
          <Introduction/>
         <Progress/>
        <Contact />
      </div>
    );
  }
}

ReactDOM.render(
  <Grit/>,
  document.querySelector('#root'));
