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