import React from 'react';
import '../assets/stylesheets/progress.css';
import ScrollAnimation from 'react-animate-on-scroll';
import girlsBike from '../assets/img/GRIT_girls_bike.jpg';
import girlsChopsaw from '../assets/img/GRIT_girls_chopsaw.jpg';
import girlsWelding from '../assets/img/GRIT_girls_welding.jpg';
import girlsSaw from '../assets/img/GRIT_girls_circularsaw.jpg';
import girlsDrill from '../assets/img/GRIT_girls_drill.jpg';
import girlAtTableSaw from '../assets/img/GRIT_girl_chopsaw.jpg';
import gritBike from '../assets/img/GRIT_bike.jpg';
import girlLumber from '../assets/img/GRIT_girl_lumber.jpg';
import gritSaw from '../assets/img/GRIT_girls_saw.jpg';
import groupSaw from '../assets/img/GRIT_group_saw.jpg';
import weldFlash from '../assets/img/GRIT_welding_flash.jpg';

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
              <img src={girlsBike} alt="girl working with table saw" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">2 / 10</div>
              <img src={girlsChopsaw} alt="girl working with table saw" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">3 / 10</div>
              <img src={girlsWelding} alt="girl working with table saw" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">4 / 10</div>
              <img src={girlsSaw} alt="girl working with table saw" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">5 / 10</div>
              <img src={girlsDrill} alt="girl working with table saw" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">6 / 10</div>
              <img src={girlAtTableSaw} alt="girl working with table saw" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">7 / 10</div>
              <img src={gritBike} alt="girl fixing a bike seat" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">8 / 10</div>
              <img src={girlLumber} alt="girl moving a wood beam" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">9 / 10</div>
              <img src={gritSaw} alt="girl working with table saw" style={{width:'100%'}} />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">10 / 10</div>
              <img src={weldFlash} alt="girl welding with sparks flying" style={{width:'100%'}} />
            </div>

            <a className="prev" onClick={this.minusSlidesClick}>&#10094;</a>
            <a className="next" onClick={this.plusSlidesClick}>&#10095;</a>
         </div>
         <br/>

      </div>
    );
  }
};
