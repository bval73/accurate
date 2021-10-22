import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';

class Carousel extends Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
        isPlaying='true'
        interval='3000'
        infinite='true'
        isIntrinsicHeight='true'
        
      >
        <ButtonBack>&lt;</ButtonBack>
        <ButtonNext>&gt;</ButtonNext>
        <Slider>
          <Slide index={0}>
            <img src='/images/slide1.jpg' className='slide-image' alt=''/>
          </Slide> 
          <Slide index={1}>
            <img src='/images/slide2.jpg' className='slide-image' alt=''/>
          </Slide>
          <Slide index={2}>
            <img src='/images/slide3.jpg' className='slide-image' alt=''/>
          </Slide>
        </Slider>
      </CarouselProvider>
    );
  }
}

export default Carousel;
