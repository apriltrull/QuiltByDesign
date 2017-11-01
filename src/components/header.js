import React from "react";
import Header from "../assets/stylesheets/header.css";


export default class Header extends React.Component {

  render () {
    return (

      <header className="navContainer">

        <div className="header">


          <Link to="/introduction"><li>Quilting Professionals</li></Link>
          <Link to="/progress"><li>Quilt Gallery</li></Link>
          <Link to="/testimonials"><li>Testimonials</li></Link>
          <Link to="/tips"><li>Quilting Tips</li></Link>
          <Link to="/contact"><li>Contact</li></Link>


         </div>
        </header>

    );
  }
};
