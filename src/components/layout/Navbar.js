import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

const Navbar = () => {
    useEffect(() => {
        let dropdown = document.querySelectorAll('dropdown-trigger');
        const options = {
            constrainWidth: true,
            coverTrigger: false,
            belowOrigin:true,
            alignment: 'left'
        };
        M.Dropdown.init(dropdown, options);
    })
    return (
        <div>
            <nav>
                <div className="nav-wrapper light-green black-text">
                    <h5 className="left hide-on-med-and-down">LADDHA AGRO PLAST INDUSTRIES</h5>
                    <Link to="/" className="brand-logo center"><img className="hoverable" src="/images/logo.jpg" style={{height:65}} alt="logo" /></Link>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger hide-on-med-and-up"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down black-text">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                        <li><Link to="/products">Products</Link></li>
                    </ul>
                </div>
            </nav>
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
        </div>
    )
}

export default Navbar;
