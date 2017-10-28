import React from 'react';
import  '../assets/stylesheets/main.css';
import Barn from '../assets/img/barn-quilt.jpg';

export default class Main extends React.Component {

  render () {
    return (

        <div className="headerImg">

            <div className = "header">
            <img src ={Barn} alt="barn with quilt"/>
              <h1 className="quilt">Quilting With Class</h1>
              <h2 className = "extend">.....Professional Longarm Quilting by Becky Wilcox</h2>
            </div>

        </div>


    );
  }
};
