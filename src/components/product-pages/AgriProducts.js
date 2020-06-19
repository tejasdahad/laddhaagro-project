import React, { useEffect, Fragment } from 'react';
import { getAgriR, getAgriRG4, getAgriRG6 } from '../../actions/productsAction';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

const AgriProducts = ({ getAgriR, getAgriRG4, getAgriRG6, agriRoopam, agriRoopamG4, agriRoopamG6 }) => {
    useEffect(() => {
        getAgriR();
        getAgriRG4();
        getAgriRG6();
        
    },[]);
    return (
        <div>
        <nav>
            <div className="nav-wrapper black">
            <div className="col s2"></div>
            <div className="col s10" style={{paddingLeft:10, marginTop:8}}>
                <Link to="/products" className="breadcrumb">Products</Link>
                <Link to="/agriproducts" className="breadcrumb">AgriProducts</Link>
            </div>
            </div>
        </nav>
            <h3 className="center" style={{marginTop:5, marginBottom:5}}>AGRICULTURAL FITTINGS</h3>
            <div className="divider"></div>
            <div className="hoverable" style={{backgroundColor:"#eeeeee"}}>
            <h5 className="center" style={{marginTop:5, marginBottom:5, paddingTop:10}}>AGRICULTURAL FITTINGS ROOPAM GOLD L/W</h5>
            <div className="center">
            {agriRoopam.length === 0 && <Spinner />}
            </div>
            <div className="row" style={{paddingLeft:10, paddingRight:10, marginBottom:5}}>
            {agriRoopam.length !== 0 && agriRoopam.map((agri) => (<Fragment>
                
                <div className="card col s12 m3 large" style={{height:"300px"}}>
                <div class="card-image waves-effect waves-block waves-light" style={{height:"80%"}}>
                <img class="activator" src={agri.image} style={{width:"100%", height:"100%"}}/>
                </div>
                <div class="card-content" style={{paddingBottom:0, paddingTop:5}}>
                <span class="card-title activator grey-text text-darken-4 center">{agri.name}</span>
                </div>
                <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{agri.name}<i class="material-icons right">close</i></span>
                {agri.agriprod.length !==0 && <div className="container">
                    <table className="responsive striped centered">
                        <thead>
                        <tr>
                            <th>Id.</th>
                            <th>Size</th>
                            <th>Qty/Box</th>
                        </tr>
                        </thead>

                        <tbody>
                        {agri.agriprod.length!==0 && agri.agriprod.map((agriprod1) => <tr>
                            <td>{agriprod1.id}</td>
                            <td>{agriprod1.size}</td>
                            <td>{agriprod1.qty}</td>
                        </tr>)}
                        
                    
                        </tbody>
                    </table>
                </div>}
                </div>
            </div>
            <div className="col m1"></div>
            </Fragment>
            ))
            
        }
        </div>            
        </div>
        <div className="divider"></div>
        <div style={{backgroundColor:"#eeeeee"}} className="hoverable">
            <h5 className="center" style={{marginTop:5, marginBottom:5, paddingTop:5}}>AGRICULTURAL FITTINGS ROOPAM GOLD PN-4</h5>
            <div className="center">
            {agriRoopamG4.length === 0 && <Spinner />}
            </div>
            <div className="row" style={{paddingLeft:10, paddingRight:10, marginBottom:5}}>
            {agriRoopamG4.length !== 0 && agriRoopamG4.map((agri) => (<Fragment>
                <div className="card col s12 m3 large" style={{height:"300px"}}>
                <div class="card-image waves-effect waves-block waves-light" style={{height:"80%"}}>
                <img class="activator" src={agri.image}  style={{width:"100%", height:"100%"}}/>
                </div>
                <div class="card-content"style={{paddingBottom:0, paddingTop:5}}>
                <span class="card-title activator grey-text text-darken-4 center">{agri.name}</span>
                </div>
                <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{agri.name}<i class="material-icons right">close</i></span>
                {agri.agriprod.length !==0 && <div className="container">
                    <table className="responsive striped centered">
                        <thead>
                        <tr>
                            <th>Id.</th>
                            <th>Size</th>
                            <th>Qty/Box</th>
                        </tr>
                        </thead>

                        <tbody>
                        {agri.agriprod.length!==0 && agri.agriprod.map((agriprod1) => <tr>
                            <td>{agriprod1.id}</td>
                            <td>{agriprod1.size}</td>
                            <td>{agriprod1.qty}</td>
                        </tr>)}
                        
                    
                        </tbody>
                    </table>
                </div>}
                </div>
                
            </div>
            
            <div className="col m1"></div>
            
            </Fragment>
            ))
        }
        </div>           
        </div>
        <div className="divider"></div>
        <div style={{backgroundColor:"#eeeeee"}} className="hoverable">
            <h5 className="center" style={{marginTop:5, paddingTop:5}}>AGRICULTURAL FITTINGS ROOPAM GOLD PN-6</h5>
            <div className="center">
            {agriRoopamG6.length === 0 && <Spinner />}
            </div>
            <div className="row" style={{paddingLeft:10, paddingRight:10, marginBottom:5}}>
            {agriRoopamG6.length !== 0 && agriRoopamG6.map((agri) => (<Fragment>
                <div className="card col s12 m3 large" style={{height:"300px"}}>
                <div class="card-image waves-effect waves-block waves-light" style={{height:"80%"}}>
                <img class="activator" src={agri.image}  style={{width:"100%", height:"100%"}}/>
                </div>
                <div class="card-content"style={{paddingBottom:0, paddingTop:5}}>
                <span class="card-title activator grey-text text-darken-4 center">{agri.name}</span>
                </div>
                <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{agri.name}<i class="material-icons right">close</i></span>
                {agri.agriprod.length !==0 && <div className="container">
                    <table className="responsive striped centered">
                        <thead>
                        <tr>
                            <th>Id.</th>
                            <th>Size</th>
                            <th>Qty/Box</th>
                        </tr>
                        </thead>

                        <tbody>
                        {agri.agriprod.length!==0 && agri.agriprod.map((agriprod1) => <tr>
                            <td>{agriprod1.id}</td>
                            <td>{agriprod1.size}</td>
                            <td>{agriprod1.qty}</td>
                        </tr>)}
                        
                    
                        </tbody>
                    </table>
                </div>}
                </div>
            </div>
            <div className="col m1"></div>
            </Fragment>
            ))
        }
        </div>        
        </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    agriRoopam: state.products.agriRoopam,
    agriRoopamG4: state.products.agriRoopamG4,
    agriRoopamG6: state.products.agriRoopamG6
});

export default connect(mapStateToProps, { getAgriR, getAgriRG4, getAgriRG6 })(AgriProducts);