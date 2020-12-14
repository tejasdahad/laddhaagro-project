import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

const Navbar = () => {
    useEffect(() => {
        let dropdown = document.querySelectorAll('dropdown-trigger');
        const options = {
            hover:true
        };
        M.Dropdown.init(dropdown, {"hover":true});
    },[])
    return (
        <div>
            <nav>
                <div className="nav-wrapper light-green white-text">
                    <h5 className="left hide-on-med-and-down" style={{paddingLeft:10}}><Link to="/">LADDHA AGRO PLAST INDUSTRIES</Link></h5>
                    <Link to="/" className="brand-logo center"><img className="hoverable" src="/images/logo.jpg" style={{height:65}} alt="logo" /></Link>
                    <a href="#" data-target="slide-out" class="sidenav-trigger hide-on-large-and-up"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down black-text">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        
                    </ul>
                </div>
            </nav>
            
            <ul id="slide-out" className="sidenav" style={{width:"60%"}}>
                <li> <h4 style={{marginBottom:0, marginTop:0, paddingTop:5,backgroundColor:"#e3f2fd"}}>Laddha Agro Plast Industries</h4></li>
                <li><div className="divider" style={{marginTop:0}}></div></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li className="no-padding">
                    <ul className="collapsible collapsible-accordion">
                    <li>
                        <a className="collapsible-header"><i className="material-icons" style={{marginRight:0}}>arrow_drop_down</i></a><Link to="/products">Products</Link>
                        <div className="collapsible-body" style={{backgroundColor:"#e3f2fd"}}>
                        <ul>
                            <li><Link to="/drips">Drips</Link></li>
                            <li><Link to="/pipes">Pipes</Link></li>
                            <li><Link to="/agriproducts">Agricultural Products</Link></li>
                        </ul>
                        </div>
                    </li>
                    </ul>
                </li>
                </ul>
                
          
        </div>
    )
}

export default Navbar;
