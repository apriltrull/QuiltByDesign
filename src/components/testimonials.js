import React from 'react';
import '../assets/stylesheets/testimonials.css';

export default class Testimonials extends React.Component {

  render () {
    return (

        <div className="views">

              <h1 className='tags'>Testimonials</h1>
            <div className = "talk">
             <div className="talk1">
              <h2>"Becky has done several quilts for me and I'm always impressed by her quality of work.  You can always tell that she has put in lots of time and energy to make each quilt special and unique.  Pam - NC"</h2>
             </div>

            <div calssName="talk2">
              <h2>I have many quilts by Becky Wilcox! I am in California and so they(the quilts) take the trip and come back with wonderful results!   I trust Becky's judgement and I have never been disappointed!  We connected on Facebook and actually went to high school together way back when!  So it is fun to do business now and I recommend her highly!</h2>
            </div>

           </div>

        </div>


    );
  }
};
