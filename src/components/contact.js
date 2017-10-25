import React from 'react';
import ContactForm from './contactForm.js';
import '../assets/stylesheets/contact.css';
import Quilts from '../assets/img/name.png';

export default class Contact extends React.Component {

  render () {
    return (
        <div className="contactMain contactContainer" >
          <h1 className="contactHeader orange"> Contact For Quotes or Questions </h1>
            <div className="contactContent">
              <div className="contactFlex">
                // <img src={Quilts} alt = "nickname of img" />
                <h4> <a href="tel:406.273.2050">406.273.2050</a> <br/>
                <a href="http://rnwilcox51@gmail.com">rnwilcox51@gmail.com</a> </h4>
                <br/>
              </div>

              <ContactForm />

            </div>
         </div>
    );
  }
}
