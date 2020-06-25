import React, { useEffect, Component } from 'react';
import './Carousel.scss';


const carouselContainer = document.querySelector(".carousel-container");

// Data for carousel
export const carouselSlidesData = [
  {
    image: "/images/coupler.jpg",
    author: "Coupler",
    
  }, {
    image: "/images/elbow.jpg",
    author: "Elbow"
  }, {
    image: "/images/drip6.jpg",
    author: "Drips"
  }, {
    image: "/images/nonisi.jpg",
    author: "Pipes"
  }, {
    image: "/images/pvc.jpg",
    author: "ISI PVC Pipes"
  }, {
    image: "/images/laddha.jpg",
    author: "Inline drips"
  }, {
    image: "/images/drip3.jpg",
    author: "Farm with drip irrigation system"
  }
];

// Component for left arrow
class CarouselLeftArrow extends Component {
  render() {
    return (
      <a
        href="#"
        className="carousel__arrow carousel__arrow--left"
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-left" />
      </a>
    );
  }
}

// Component for right arrow
class CarouselRightArrow extends Component {
  render() {
    return (
      <a
        href="#"
        className="carousel__arrow carousel__arrow--right"
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-right" />
      </a>
    );
  }
}

// Component for carousel indicator
class CarouselIndicator extends Component {
  render() {
    return (
      <li>
        <a
          className={
            this.props.index == this.props.activeIndex
              ? "carousel__indicator carousel__indicator--active"
              : "carousel__indicator"
          }
          onClick={this.props.onClick}
        />
      </li>
    );
  }
}

// Component for slide
class CarouselSlide extends Component {
  render() {
    return (
      <li
        className={
          this.props.index == this.props.activeIndex
            ? "carousel__slide carousel__slide--active"
            : "carousel__slide"
        }
      >
        <img src={this.props.slide.image} alt={this.props.slide.author} style={{width:"80%", height:"10%"}}></img>

        <p>
          <strong className="carousel-slide__author">
            {this.props.slide.author}
          </strong>
        </p>
      </li>
    );
  }
}

// Carousel component
class Carousel extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0
    };
  }
/*
  componentDidUpdate() {
    this.autoplay()
  }
  componentDidMount() {
    this.autoplay()
  }

  autoplay() {
    setTimeout(() => {
      var index = this.state.activeIndex;

      index = (index + 1) % 7;

      this.goToSlide(index);
    }, 5000);
  }
*/
  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <div className="carousel1 container" style={{backgroundColor:"#212121", paddingBottom:10, paddingTop:10, width:"100%"}}>
        <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />
        <ul className="carousel__slides">
          {this.props.slides.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          )}
        </ul>

        <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

        <ul className="carousel__indicators">
          {this.props.slides.map((slide, index) =>
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              onClick={e => this.goToSlide(index)}
            />
          )}
        </ul>
      </div>
    );
  }
}

export default Carousel;