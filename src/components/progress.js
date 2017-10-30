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
import Smallfly from '../assets/img/smallYellowButterfly.jpg';
import TwoBettys from '../assets/img/twoBettys.jpg';
import TwoBirds from '../assets/img/twoBirds.jpg';
import YellowSquare from '../assets/img/yellowSquare.jpg';

import { Slide } from 'react-slideshow-image';
import { Fade } from 'react-slideshow-image';


const images = [
  'img/mallard.jpg',
  'img/swan.jpg',
  'img/flyingSwan.jpg',
  'img/loons.jpg',
  'img/ants.jpg',
  'img/blueButterfly.jpg'
];


export default class Progress extends React.Component {

  render () {

    const Slideshow = () => {
        return (



      <div className='progress'>
        <h1 className='orange'> Quilt Gallery </h1>

        <br/>
        <Fade
          img={images}
          duration="5000"
          transitionDuration="1000"
        />
         </div>
         <br/>

      </div>
    );
  }
};
