import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/main.js';

import './assets/stylesheets/index.css';
import Introduction from './components/introduction.js';


class Grit extends React.Component {
  render() {
    return (
      <div>

        <Main />
        <Introduction/>



      </div>
    );
  }
}

ReactDOM.render(
  <Grit/>,
  document.querySelector('#root'));
