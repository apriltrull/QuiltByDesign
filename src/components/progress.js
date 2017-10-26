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
import GreenSquare from '../assets/img/greenSquare.jpg';
import TexasSun from '../assets/img/texasSun.jpg';
import BettyBonnet from '../assets/img/bettyBonnet.jpg';
import FullBettys from '../assets/img/fullBettyBonnets.jpg';
import GreenStar from '../assets/img/greenStar.jpg';
import Home from '../assets/img/homeSweetHome.jpg';
import LargeGreen from '../assets/img/largeGreenSquare.jpg';
import LargePurple from '../assets/img/largePurpleCircle.jpg';
import Butterfly from '../assets/img/largeYellowButterfly.jpg';
import Pink from '../assets/img/pinkFlower.jpg';
import Purple from '../assets/img/purpleFlowers.jpg';
import PurpleSquare from '../assets/img/purplesquare.jpg';
import Red from '../assets/img/redSquare.jpg';
import SmallButterfly from '../assets/img/smallYellowButterfly';
import TwoBettys from '../assets/img/twoBettys.jpg';
import TwoBirds from '../assets/img/twoBirds.jpg';
import YellowSquare from '../assets/img/yellowSquare.jpg';


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
   if(this.state.slideIndex < 25) {
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
              <div className="numbertext">1 / 25</div>
              <img src={TexasSun} alt="texas sun shape" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">2 / 25</div>
              <img src={Mallard} alt="mallard bird" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">3 / 25</div>
              <img src={Swan} alt="swimming swan" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">4 / 25</div>
              <img src={FlyingSwan} alt="swan flying" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">5 / 25</div>
              <img src={Loons} alt="swimming loons" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">6 / 25</div>
              <img src={Ants} alt = "trail of ants"  style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">7 / 25</div>
              <img src={BlueButterfly} alt = "blue butterfly"  style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">8 / 25</div>
              <img src={Cats}alt = "cat quilt" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">9 / 25</div>
              <img src={Checkerboard} alt="x checkerboard" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">10 / 25</div>
              <img src={GreenSquare}alt = "light green square" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">11 / 25</div>
              <img src={YellowSquare}alt = "yellow square" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">12 / 25</div>
              <img src={BettyBonnet}alt = "bettyBonnet" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">13 / 25</div>
              <img src={FullBettys}alt = "three betty bonnets" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">14 / 25</div>
              <img src={GreenStar}alt = "green star" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">15 / 25</div>
              <img src={Home}alt = "home sweet home quilt" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">16 / 25</div>
              <img src={LargeGreen}alt = "large green square" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">17 / 25</div>
              <img src={LargePurple}alt = "large purple square" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">18 / 25</div>
              <img src={Butterfly} alt = "large butterfly" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">19 / 25</div>
              <img src={ Pink }alt = "pink flower" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">20 / 25</div>
              <img src={Purple}alt = "purple circle" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">21 / 25</div>
              <img src={PurpleSquare}alt = "purple square" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">22 / 25</div>
              <img src={Red}alt = "red square" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">23 / 25</div>
              <img src={SmallButterfly}alt = "small butterfly" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">24 / 25</div>
              <img src={TwoBettys}alt = "two betty bonnets" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">25 / 25</div>
              <img src={TwoBirds}alt = "two birds on catails" style={{width:'100%'}} />
            </div>



            <a className="prev" onClick={this.minusSlidesClick}>&#10094;</a>
            <a className="next" onClick={this.plusSlidesClick}>&#10095;</a>
         </div>
         <br/>

      </div>
    );
  }
};
