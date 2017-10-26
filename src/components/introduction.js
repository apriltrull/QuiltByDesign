import React from 'react';
import  '../assets/stylesheets/introduction.css';
import Becky from  '../assets/img/quilt-by-design-becky-wilcox.jpg';


export default class Introduction extends React.Component {

  render () {
    return (

        <div className="intro">

            <div className = "bio">
            <img src ={Becky} alt="becky with longarm"/>
              <h1>Becky Wilcox</h1>
              <h2>Becky has been longarm quilting since 2002.  etc etc etc</h2>
            </div>

        </div>


    );
  }
};
