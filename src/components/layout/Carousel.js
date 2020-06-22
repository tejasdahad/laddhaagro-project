import React, { useEffect } from 'react';
import M from 'materialize-css';
import ReactDOM from 'react-dom'
import './Carousel.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel =() => {
    
    return (
        <Carousel autoPlay={true} showArrows={true} showIndicators={true}>
       
    </Carousel>      
    )
    
};

export default ImageCarousel;
