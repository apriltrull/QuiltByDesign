import React from 'react';
import  '../assets/stylesheets/introduction.css';
import Becky from  '../assets/img/quilt-by-design-becky-wilcox.jpg';


export default class Introduction extends React.Component {

  render () {
    return (

        <div className="intro">

            <div>
            <img src ={Becky} alt="becky with longarm" style={width:100%}/>
              <h1 className="grit" style={text-align:right}>Becky Wilcox</h1>
              <h2>Becky has been longarm quilting since 2002.  etc etc etc</h2>
            </div>

        </div>


    );
  }
};
