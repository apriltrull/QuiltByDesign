import React from 'react';
import '../assets/stylesheets/progress.css';
// import ScrollAnimation from 'react-animate-on-scroll';

import Mallard from '../assets/img/mallard.jpg';
import Swan from '../assets/img/swan.jpg';
import FlyingSwan from '../assets/img/flyingSwan.jpg';
import Loons from '../assets/img/loons.jpg';
import Ants from '../assets/img/ants.jpg';
import BlueButterfly from '../assets/img/blueButterfly.jpg';
import Cats from '../assets/img/cats.jpg';
import Checkerboard from '../assets/img/checkerboard.jpg';
import GreenSquare from '../assets/img/greensquare.jpg';


export default class Progress extends React.Component {
  constructor() {
    super();
    this.plusSlidesClick = this.plusSlides.bind(this);
    this.minusSlidesClick = this.minusSlides.bind(this);
    this.state = {
      slideIndex:1
    }
  }

  componentDidMount() {
    this.showSlides();
  }

  componentDidUpdate() {
    this.showSlides();
    return true;
  }

  plusSlides() {
   let nextIndex;
   if(this.state.slideIndex < 10) {
     nextIndex = this.state.slideIndex + 1;
   } else {nextIndex = this.state.slideIndex}
   this.setState({
     slideIndex: nextIndex
   });
  }

  minusSlides() {
    let nextIndex;
    if(this.state.slideIndex > 1) {
      nextIndex = this.state.slideIndex - 1;
    } else {nextIndex = this.state.slideIndex}
    this.setState({
      slideIndex: nextIndex
    });
  }

  showSlides() {
      var i;
      var slideIndex = this.state.slideIndex;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = "block";
    }

  render () {
    return (
      <div className='progress'>
        <h1 className='orange'> Quilt Gallery </h1>
        <br/>

        <div className="slideshow-container">

            <div className="mySlides fade">
              <div className="numbertext">1 / 10</div>
              <img src={Becky} alt="pic of Becky with longarm" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">2 / 10</div>
              <img src={Mallard} alt="mallard bird" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">3 / 10</div>
              <img src={Swan} alt="swimming swan" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">4 / 10</div>
              <img src={FlyingSwan} alt="swan flying" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">5 / 10</div>
              <img src={Loons} alt="swimming loons" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">6 / 10</div>
              <img src={Ants} alt = "trail of ants"  style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">7 / 10</div>
              <img src={BlueButterfly} alt = "blue butterfly"  style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">8 / 10</div>
              <img src={Cats}alt = "cat quilt" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">9 / 10</div>
              <img src={Checkerboard} alt="x checkerboard" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">10 / 10</div>
              <img src={GreenSquare}alt = "light green square" style={{width:'100%'}} />
            </div>

            <a className="prev" onClick={this.minusSlidesClick}>&#10094;</a>
            <a className="next" onClick={this.plusSlidesClick}>&#10095;</a>
         </div>
         <br/>

      </div>
    );
  }
};
