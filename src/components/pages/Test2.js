import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation.scss';

const Slider= ()  => (
    <AwesomeSlider
    play={true}
    cancelOnInteraction={false}
    interval={6000}
    cssModule={AwesomeSliderStyles}
  >    <div data-src="/path/to/image-0.jpg" />
    <div data-src="/path/to/image-1.jpg" />
    <div data-src="/path/to/image-2.jpg" />
    <div data-src="/path/to/image-3.jpg" />
  </AwesomeSlider>
);

export default Slider;