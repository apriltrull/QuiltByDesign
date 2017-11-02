import React from 'react';
import  '../assets/stylesheets/main.css';
import  '../assets/stylesheets/introduction.css';
import Becky from  '../assets/img/quilt-by-design-becky-wilcox.jpg';
import Heading from "./assests/components/heading.js";




export default class Main extends React.Component {

  render () {
    return (

     <div>



        <div className="headerImg">



            <div className = "advertise">

              <h1 className="quilt">Quilting With Class</h1>
              <h2 className = "extend">.....Professional Longarm Quilting by Becky Wilcox</h2>
            </div>

        </div>


        <div className="intro">

              <h1 className='orange'>Meet Your Professional Longarm Quilting Team</h1>
            <div className = "bio">
              <img src ={Becky} alt="becky with longarm"/>
              <h2 className = "bio-text">Rebekah Wilcox has over 250 combined years of quilting experience for the crown heads of Europe.  If you think your quilt deserves the finest treatment know to man or beast, call for an appointment.  If you and your quilt meet her qualifications, you can expect an invitation to make a reservation.  Invitations are sent by registered mail and are hand made with the finest oriental silk and gold leaf letters.
A $1500 non-refundable deposit will be expected upon final approval.
The current waiting time for one of these royal class quilts, is approximately 1 year to 15 years.  We don’t accept customers who are 70 years or older for obvious reasons.

Remember:
 Quality remains long after price is forgotten!</h2>
            </div>

        </div>
    </div>

    );
  }
};
