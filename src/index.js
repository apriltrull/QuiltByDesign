import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main.js';
import Contact from './components/contact.js';
import './assets/stylesheets/index.css';
import Progress from './components/progress.js';
import Introduction from './components/introduction.js';
import Tips from './components/tips.js';
import Becky from  '../assets/img/quilt-by-design-becky-wilcox.jpg';

class Grit extends React.Component {
  render() {
    return (
      <div>
        <Main />

        <div className="statsMainContainer">
          <h1 className='orange stats'> Meet Your Professional Longarm Quilting Team </h1>
          <div className = "bio">
            <img src ={Becky} alt="becky with longarm"/>
            <h2 className = "bio-text">Rebekah Wilcox has over 250 combined years of quilting experience for the crown heads of Europe.  If you think your quilt deserves the finest treatment know to man or beast, call for an appointment.  If you and your quilt meet her qualifications, you can expect an invitation to make a reservation.  Invitations are sent by registered mail and are hand made with the finest oriental silk and gold leaf letters.
A $1500 non-refundable deposit will be expected upon final approval.
The current waiting time for one of these royal class quilts, is approximately 1 year to 15 years.  We don’t accept customers who are 70 years or older for obvious reasons.

Remember:
Quality remains long after price is forgotten!</h2>
            <div/>

            <div className="flexWrapper">


            </div>
          </div>

         <Progress/>
         <Testimonial/>
         <Tips/>
        <Contact />
      </div>
    );
  }
}

ReactDOM.render(
  <Grit/>,
  document.querySelector('#root'));
