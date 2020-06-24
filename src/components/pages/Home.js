import React from 'react';
import './Home.css';
import ReactPlayer from 'react-player';
import Carousel,{ carouselSlidesData } from '../layout/Carousel';

const Home = () => {
    return (
        <div style={{marginTop:5}}>
        <div className="bg-img1">

            <div className="center">
                <h4 className="white-text">Welcome....</h4>
            </div>
        </div>
        
        <div className="container center">
            <img src="/images/laddha_wc1.png" style={{width:"100%", height:"100%"}} />
        </div>
        <h3 className="center">Here is what we do</h3>
        <div className='container wrapper' style={{marginTop:10, marginBottom:10}}>
        <ReactPlayer
            className='player'
            url="https://www.youtube.com/watch?v=2R6gnFnTnKE&t=296s"
            width='100%'
            height='100%'
        />
        </div>
        <div className="container">
        
        </div>
            <Carousel slides={carouselSlidesData} />
        </div>
    );
}

export default Home;