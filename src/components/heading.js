import React from "react";
import "../assets/stylesheets/heading.css";
import {Link} from "./assets/components/introduction.js";
import {Link} from "./assets/components/progress.js";
import {Link} from "./assets/components/testimonials.js";
import {Link} from "./tips/components/tips.js";
import {Link} from "./assets/components/contact.js";

export default class Heading extends React.Component {

  render () {
    return (

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

    );
  }
};
