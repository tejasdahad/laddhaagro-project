import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Carousel from '../layout/Carousel';

const Home = () => {
    return (
        <div style={{marginTop:0}}>
        <div class="bg-img1">
            <div class="right-align hide-on-med-and-down">
                <div class="topnav">
                <Link to="/">Home</Link>
                <Link to="/about">About us</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/products">Products</Link>
                </div>

            </div>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger hide-on-med-and-up"><i className="material-icons">menu</i></a>
            <div className="sidenav" id="mobile-demo" style={{width:"50%"}}>
            <div style={{backgroundColor:"#e3f2fd"}}>
            <h4 style={{marginBottom:0, marginTop:0, paddingTop:5}}>Ladda Agro Plast Industries</h4>
            </div>
            <div className="divider" style={{marginTop:0}}></div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/products">Products <a id="2" className='dropdown-trigger btn transparent' href='#' data-target='dropdown1' style={{paddingLeft:0, border:"none", paddingRight:0, width:0}}><i className="material-icons black-text">expand_more</i></a></Link></li>
                </ul>
            </div>
            
            <ul id='dropdown1' className='dropdown-content' style={{width:"200px !important"}}>
                <li><Link to="/drips">Drips</Link></li>
                <li><Link to="/pipes">Pipes</Link></li>
                <li><Link to="/agriproducts">Agricultural Products</Link></li>
            </ul>

            <div className="center">
            <span className="center"><img src="/images/Logo.jpg" style={{width:"20%", height:"20%", marginTop:10}} /></span>
            </div>
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
            <Carousel />
        </div>
    );
}

export default Home;