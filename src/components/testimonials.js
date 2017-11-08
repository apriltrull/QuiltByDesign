import React from 'react';
import '../assets/stylesheets/testimonials.css';
import Demo from '../assets/img/client-quilt.JPG';
import Demo2 from '../assets/img/client-quilt2.PNG';

export default class Testimonials extends React.Component {

  render () {
    return (

        <div className="views">

              <h1 className='tags'>Testimonials</h1>
            <div className = "talk">
             <div className="talk1">
              <h2>"Becky has done several quilts for me and I'm always impressed by her quality of work.  You can always tell that she has put in lots of time and energy to make each quilt special and unique.  Pam - NC"</h2>
             </div>

            <div className="talk2">
              <h2>I have many quilts by Becky Wilcox! I am in California and so they(the quilts) take the trip and come back with wonderful results!   I trust Becky's judgement and I have never been disappointed!  We connected on Facebook and actually went to high school together way back when!  So it is fun to do business now and I recommend her highly!  Shelley - CA</h2>
            </div>

            <div className = "talk3">
             <h2> I was commissioned by a dear friend to make her a quilted bedspread with very few specifications. The quilt had to be all white and be bedspread size.  Oh, my, a white quilt made by someone who is a “chromoholic”...  I set to work and found 39 different whites and creams to use with the Cinnamon Bun pattern I had picked out.  But the final product was not amazing until Becky worked her magic on it!  Her custom quilting is just awesome, really brought out each block to perfection!  I can’t say enough good about her skill, and would highly recommend her!  Jo Ann McKee </h2>

               <div className="img">
               <img scr= {Demo} alt="client quilt"/>
               <img src={Demo2} alt="clients third quilt"/>
               </div>
            </div>

           </div>

        </div>


    );
  }
};
