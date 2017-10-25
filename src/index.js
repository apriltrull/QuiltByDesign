import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main.js';
import Contact from './components/contact.js';
import './assets/stylesheets/index.css';

class Grit extends React.Component {
  render() {
    return (
      <div>
        <Main />
        <Mission />
        <div className="statsMainContainer">
          <h1 className='orange stats'> STATISTICS </h1>
            <div className="flexWrapper">


            </div>
          </div>
        
        <Contact />
      </div>
    );
  }
}

ReactDOM.render(
  <Grit/>,
  document.querySelector('#root'));
