import React,{ useEffect, useCallback, Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

const Pipes = () => {
    useEffect(() => {
        let collapsible = document.querySelectorAll('.collapsible');
        
        let options = {

        };
        M.Collapsible.init(collapsible,options);
                
    });
    
    return (
        <div>
            <nav>
                <div className="nav-wrapper black">
                <div className="col s2"></div>
                <div className="col s10" style={{paddingLeft:10}}>
                    <Link to="/products" className="breadcrumb">Products</Link>
                    <Link to="/pipes" className="breadcrumb">Pipes</Link>
                </div>
                </div>
            </nav>
            <h3 className="center">P.V.C Pipes</h3>
            <div className="divider"></div>
            <div className="row" style={{backgroundColor:"#e3f2fd", marginBottom:5}}>
                <div className="col s12 m4 center">
                    <h4>What do we make?</h4>
                </div>
                <div className="col s12 m8">
                    <h5>We also make U.P.V.C pipes with size upto 2".</h5>
                </div>
            </div>
            <div className="row" style={{backgroundColor:"#e8f5e9", marginBottom:5}}>
                <div className="col s12 m4 center">
                    <h4>Sizes we manufacture</h4>
                </div>
                <div className="col s12 m8">
                    <h5>
                        We make P.V.C pipes in sizes ranging from 2" to 8".
                    </h5>
                </div>
            </div>
            <h4 className="center">Brands we make...</h4>
            <div className="container">
                <ul className="collapsible popout">
                    <li>
                        <div className="collapsible-header"><h6>Roopam Gold</h6></div>
                        <div className="collapsible-body">
                            <span>
                                <img src="images/isiroopam.jpg" alt="isiroopam" style={{width:"100%", height:250}} />
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><h6>Muviflex</h6></div>
                        <div className="collapsible-body">
                            <span>
                                <img src="images/pvcISIM.jpeg" alt="pvcisim" style={{width:"100%", height:250}} />
                            </span>
                        </div>
                    </li>            
                </ul>
                
            </div>
        </div>
        
    )
}

export default Pipes;