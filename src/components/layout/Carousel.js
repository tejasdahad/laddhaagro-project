import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import './Carousel.css';

const Carousel = () => {
    
    useEffect(() => {
        showSlides();
    },[]);
    var slideIndex = 0;

    const plusSlides =(n) => {
        showSlides(slideIndex += n);
    }
      
    // Thumbnail image controls
    const currentSlide = (n) => {
    showSlides(slideIndex = n);
    }

    const showSlides = () => {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if(slides) {
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
    
    }
    
    return (
        <div className="container coloring">
        <div className="row">
            <div className="col s3">
                <h4>Here is a glimpse of what we do</h4>
                <p>We manufacture a range of products from drips to pipes to agricultural products. We have best work force to provide you the best product.</p>            
            </div>
            <div className="col s9" style={{paddingLeft:0}}>
                <div class="slideshow-container">

                <div class="mySlides fade">
                    <img src="/images/coupler.jpg" className="image-styling" />
                    <div class="text">Coupler</div>
                </div>
 
                <div class="mySlides fade">
                    <img src="/images/drip1.jpg" className="image-styling" />
                    <div class="text">Drips</div>
                </div>

                <div class="mySlides fade">
                    <img src="/images/pvc.jpg" className="image-styling" />
                    <div class="text">PVC</div>
                </div>

                <div class="mySlides fade">
                    <img src="/images/drip.jfif" className="image-styling" />
                    <div class="text">Drips</div>
                </div>

                <div class="mySlides fade">
                    <img src="/images/pipes.jpg" className="image-styling" />
                    <div class="text">Drips</div>
                </div>
            </div>
        </div>
    </div>        
        </div>
    )
};

export default Carousel;
