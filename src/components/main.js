import React from 'react';
import  '../assets/stylesheets/main.css';


WebFont.load({
  google: {
    families: ['Ribbon Cursive', 'cursive']
  }
});

export default class Main extends React.Component {

  render () {
    return (

        <div className="headerImg">

            <div className = "header">

              <h1 className="quilt">Quilting With Class</h1>
              <h2 className = "extend">.....Professional Longarm Quilting by Becky Wilcox</h2>
            </div>

        </div>


    );
  }
};
