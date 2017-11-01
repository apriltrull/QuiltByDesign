import React from 'react';
import  '../assets/stylesheets/main.css';
import {Link} from "react-router-dom";


export default class Main extends React.Component {

  render () {
    return (

        <div className="headerImg">

        <header className="navContainer">
         <ul>
          <div className="row1">


            <Link to="/introduction"><li>Quilting Professionals</li></Link>
            <Link to="/progress"><li>Quilt Gallery</li></Link>
            <Link to="/testimonials"><li>Testimonials</li></Link>
            <Link to="/tips"><li>Quilting Tips</li></Link>
            <Link to="/contact"><li>Contact</li></Link>


            </div>
           </ul>
          </header>


            <div className = "advertise">

              <h1 className="quilt">Quilting With Class</h1>
              <h2 className = "extend">.....Professional Longarm Quilting by Becky Wilcox</h2>
            </div>

        </div>


    );
  }
};
