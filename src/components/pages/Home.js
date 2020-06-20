import React from 'react';
import './Home.css';
import ReactPlayer from 'react-player';
import Carousel from '../layout/Carousel';

const Home = () => {
    return (
        <div style={{marginTop:5}}>
        <nav className="nav-extended">
            <div className="nav-content">
                <span className="nav-title center"><img src="/images/Logo.jpg" style={{width:"20%", height:"20%"}} /></span>
                <h5 className="center red-text">We make the best out of plastic to make your life better.</h5>
            </div>
        </nav>
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
            <Carousel />
        </div>
    );
}

export default Home;