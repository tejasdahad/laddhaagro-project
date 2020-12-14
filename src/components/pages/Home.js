import React,{ useEffect } from 'react';
import './Home.css';
import M from 'materialize-css'
import ReactPlayer from 'react-player';
import Carousel, { carouselSlidesData } from '../layout/Carousel';
import TestCarousel from './TestCarousel';
import SwipeableTextMobileStepper from './TestCar1';

const Home = () => {
    
    return (
        <div style={{marginTop:5, backgroundColor:"#212121"}}>
        <div className="row">
            <div className="col s12 m12 center-align">
            <h3 className="white-text">Welcome</h3>
            <h5 className="white-text">Quality is our symbol.</h5>
            <h5 className="white-text" style={{fontStyle:"italic"}}>Manufacturing the best quality product since 3 decades.</h5>
            </div>
            <div className="col s12 center" style={{marginTop:10}}>
            {//<Carousel slides={carouselSlidesData} />
        }
        <TestCarousel />

            </div>
        </div>
        <div className="row">

        </div>
        <div className="bg-img1" style={{paddingBottom:10}}>
        <div className="row">
        <h3 className="center white-text">Here is what we do</h3>
        <div className='container wrapper' style={{marginTop:10, marginBottom:10}}>
        <ReactPlayer
            className='player'
            url="https://www.youtube.com/watch?v=2R6gnFnTnKE&t=296s"
            width='100%'
            height='100%'
        />
        </div>
        <div className="row">
            <div className="col s12 offset-m1 m3 center-align" style={{backgroundColor:"#e8eaf6", marginBottom:5}}>
                <h4 style={{color:"black"}}>We supply products all over Maharashtra and some parts of Chhatisgarh, Haryana, Karnataka and Madhya Pradesh.</h4>
            </div>
            <div className="col s12 m8 center-align">
                <img src="/images/maha.jpg" alt="maha" style={{width:"80%", height:"80%"}} />
            </div>
        </div>
        </div>
        </div>
        </div>
    );
}

export default Home;