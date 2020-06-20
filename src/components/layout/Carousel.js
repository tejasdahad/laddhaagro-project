import React, { useEffect } from 'react';
import M from 'materialize-css';
import './Carousel.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import {carousel} from 'materialize-css';

const Carousel = () => {
    let carousel;
    useEffect(() => {
        
        carousel = document.querySelectorAll('.carousel');

        let options = {
            fullWidth:true,
            duration:200
        };
        M.Carousel.init(carousel, options);
    });
    
    return (
        <div className="container coloring">
        <div className="row">
            <div className="col s12 m3">
                <h4>Here is a glimpse of what we make</h4>
                <p>We manufacture a range of products from drips to pipes to agricultural products. We have best work force to provide you the best product.</p>            
            </div>
            <div className="col s12 m9">
            <div className="carousel carousel-slider center" data-indicators="true">
            <Link className="carousel-item" to="#one!"><img src="/images/coupler.jpg" /></Link>
            <Link className="carousel-item" to="#two!"><img src="/images/drip1.jpg" /></Link>
            <Link className="carousel-item" to="#three!"><img src="/images/pvc.jpg" /></Link>
            <Link className="carousel-item" to="#four!"><img src="/images/pipes.jpg" /></Link>
            </div>
            </div>
            
        </div>
    </div>        
    )
};

export default Carousel;
