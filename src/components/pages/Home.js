import React from 'react';
import './Home.css';
import ReactPlayer from 'react-player';
import Carousel from '../layout/Carousel';

const Home = () => {
    return (
        <div>
        <nav className="nav-extended">
            <div className="nav-content">
                <span className="nav-title"></span>
                <h5 className="center red-text">We make the best out of plastic to make your life better.</h5>
            </div>
        </nav>
        <div className="container center" style={{marginTop:5, marginBottom:10}}>
        <ReactPlayer url="https://www.youtube.com/watch?v=2R6gnFnTnKE&t=296s" style={{width:"80%",height:"auto"}}/>
        </div>
            <Carousel />
        </div>
    );
}

export default Home;