import React from 'react';
import  '../assets/stylesheets/main.css';
import  '../assets/stylesheets/introduction.css';
import Becky from  '../assets/img/quilt-by-design-becky-wilcox.jpg';





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
              <h2 className = "bio-text">Becky began her quilting journey 20 years ago with much fear and trepidation. But a fillow quilter told her that if she could sew a straight line, she could make a quilt.  And she hasn't stopped.  But the journey began to change about 10 years ago.  Fascinated with the actual quilting process, she wondered if she could do that as well.  She stepped out and purchased her first Gammill longarm machine.  Another part of the journey transpired about 5 years ago when her husband saw Gamiill's latest Statler Stitcher computerized longarm machine.  He was intrigued with the computer aspect and Becky was amazed at what she was seeing  on the quilts.  It wasn't long and the dealer was installing a Statler in her home.  Things haven't been the same since.  Now quilting as a team, Bill the computer technician (go-fer as he calls it) and becky as the artist, they produce award winning quilts. <br/> Becky has a varied artistic background.   Her mother painted in acrylics and oil paints.  Becky has also studied and done some oil painting and charcoal drawings.  "My passions are home decorating, gourmet cooking, music and of course, quilting."  Quilting has been in her family for generations. Becky has quilts in her home that are a part of her heritage.  Some of the fabrics date back to the late 1800's. <br/> Becky has been married for 45 years tothe go-fer, has 3 children and 8 grandchildren.  They all live in the beautiful state of Montana.  
             </h2>
            </div>

        </div>
    </div>

    );
  }
};
