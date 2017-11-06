import React from 'react';
import '../assets/stylesheets/tips.css';
import Document from '../assets/pdf/Applying-Borders.pdf';

export default class Tips extends React.Component {

  render () {
    return (

        <div className="creativity">

              <h1 className='tags'>Tips and Tricks</h1>
            <div className = "tips">

              <h2 className = "tips-text">
                <ul>
                  <li>TIP #1 One of the problems as a longarm quilter that I run into fairly often are borders that flare or have extra fabric in them.  Do I make a tuck? Do I cut into the border and remove some of the fabric?  How can I quilt that flat???  Proper measuring is the answer.  Each time you add any border to the center of your quilt, follow the guidelines in the example below.  You will have a much happier longarm quilter, no headaches for her and your quilt will look so much nicer.</li>
                  <li>TIP #2 To pre-wash or not to pre-wash?  That is the question.   There are many opinions on that subject.  Mine has changed since I began quilting.  When I began quilting, I never pre-washed.  It simplified things and I think I was a bit lazy.  I also loved that crisp feel of the fabric.  But since I have been pre-washing the fabric, my quilts have been so much more accurate.  I saw this proven in a class I went to.  The teacher showed samples of a simple nine patch block on a measuring grid.  The pre-washed fabric was right on the lines, nearly perfect.  The non-pre washed fabric wobbled and waved a bit.  And we all know that if the inaccuracies continue, they get bigger as the quilt gets bigger.  The end product is a less than square quilt.  To get the crispness back into your fabric, use a fabric spray such as Mary Ellen's Best Press.  Better yet, make your own.  Mix 1 ounce of vodka, made from potato startch, with 8 ounces of distilled water.  Voila! Your own pressing agent and for pennies too! </li>

                </ul>
              </h2>

            </div>

        </div>


    );
  }
};
