import React from "react";
import "../assets/stylesheets/heading.css";
import {Link} from 'react-router-dom';

export default class Heading extends React.Component {

  render () {
    return (

      <header className="navContainer">

        <div className="row1">


          <Link to="/introduction.js"><li>Quilting Professionals</li></Link>
          <Link to="/progress.js"><li>Quilt Gallery</li></Link>
          <Link to="/testimonials.js"><li>Testimonials</li></Link>
          <Link to="/tips.js"><li>Quilting Tips</li></Link>
          <Link to="/contact.js"><li>Contact</li></Link>


         </div>
        </header>

    );
  }
};
