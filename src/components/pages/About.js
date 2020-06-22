import React, { useEffect, Fragment } from 'react';
import { getDirectors } from '../../actions/directorActions';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import './About.css';
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";
import Navbar from '../layout/Navbar';


const centeredStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
  };
  const h2Styles = {
    fontSize: "82px",
    color: "white",
    backgroundColor: "black",
    padding: "0px 32px"
  };

const About = ({ getDirectors, directors }) => {
    useEffect(() => {
        getDirectors();
    },[directors]);
    useEffect(() => {

        typeWriter();        
    },[]);
    var i = 0;
        var txt = `Laddha Agro Plast Industries Private Limited is a Non-govt company, incorporated on 19 Nov, 1987. It's a private unlisted company and is classified as 'company limited by shares'.

        Company's authorized capital stands at Rs 100.0 lakhs and has 79.0% paid-up capital which is Rs 79.0 lakhs. Laddha Agro Plast Industries Private Limited last annual general meet (AGM) happened on 29 Sep, 2017. The company last updated its financials on 31 Mar, 2017 as per Ministry of Corporate Affairs (MCA).

        Laddha Agro Plast Industries Private Limited is majorly in Agriculture and Allied Activities business from last 33 years and currently, company operations are active. Current board members & directors are RAVINDRA DAGDULAL LADDHA and KIRAN SHIVNARAYAN DAHAD .

        Company is registered in Mumbai (Maharashtra) Registrar Office. Laddha Agro Plast Industries Private Limited registered address is PLOT NO 125M I D C JALGAON MH 425003 IN
        `;
        var speed = 10;
    function typeWriter() {
        
        if (i < txt.length) {
            document.getElementById("demo").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    return (
        <Fragment>
            <Navbar />
            <div
                style={{
                ...centeredStyles,
                overflow: "hidden",
                marginTop:0,
                width:"100%"
                }}
            >
                <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                    <Spring
                    delay={300}
                    to={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                        ? "translateX(0)"
                        : "translateX(200px)",
                    }}
                    >
                    {(props) => (
                        <div className="row" style={{...props, backgroundColor: "#ede7f6", marginTop:10}}>
                            <div className="about"><h2 style={{...h2Styles, ...props, marginTop:10, paddingTop:10}}>About us</h2></div>
                            <div className="col s12 l8">
                            <p id="demo"></p>
                            <p></p>
                            <div>
                                <h4 className="center">Certificates</h4>
                            </div>
                            <div className="row" style={{alignItems:"center"}}>
                                <div className="col s12 m6">
                                    <img src="/images/iaf.png" alt="iaf" style={{width:275}}/>
                                </div>
                                <div className="col s12 m6">
                                    <img src="/images/isi.jfif" alt="isi" />
                                </div>
                            </div>
                            </div>
                            <div className="col s12 l4 center">
                                <img src="/images/iso9001.jfif" alt="iso" style={{width: 350,height:350, marginTop:10 }} />
                            </div>
                        </div>

                    )}
                    </Spring>
                )}
                </VisibilitySensor>
            </div>
            <div className="divider"></div>
            <div
                style={{
                ...centeredStyles,
                }}
            >
                <VisibilitySensor>
                {({ isVisible }) => (
                    <Spring delay={200} to={{ opacity: isVisible ? 1 : 0 }}>
                    {({ opacity }) => (
                        <div className="row" style={{  opacity, backgroundColor:"#e0f2f1" }}>
                        <h2 style={{...h2Styles, marginTop:0}}>History</h2>
                        <p id="company-info">Laddha Agro Plast Industries Private Limited is a Private incorporated on 19 November 1987. It is classified as Non-govt company and is registered at Registrar of Companies, Mumbai. Its authorized share capital is Rs. 10,000,000 and its paid up capital is Rs. 7,900,000. It is inolved in Growing of crops; market gardening; horticulture
        
                        Laddha Agro Plast Industries Private Limited's Annual General Meeting (AGM) was last held on 30 September 2019 and as per records from Ministry of Corporate Affairs (MCA), its balance sheet was last filed on 31 March 2019.
                        
                        Directors of Laddha Agro Plast Industries Private Limited are Ravindra Dagdulal Laddha and Kiran Shivnarayan Dahad.
                        
                        Laddha Agro Plast Industries Private Limited's Corporate Identification Number is (CIN) U01100MH1987PTC045347 and its registration number is 45347.Its Email address is laddhaagro@gmail.com and its registered address is PLOT NO 125M I D C JALGAON MH 425003 IN , - , .
                        
                        Current status of Laddha Agro Plast Industries Private Limited is - Active.</p>
                    </div>
                    )}
                    </Spring>
                )}
                </VisibilitySensor>
            </div>
            {directors.length===0 && <div className="center">
                <Spinner />
            </div>}
            <div
                style={{
                overflow: "hidden",
                }}
            >
                <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                    <Spring
                    delay={300}
                    to={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                        ? "translateX(0)"
                        : "translateX(-200px)",
                    }}
                    >
                    {(props) => (
                        <div>
                        
                        {directors.length!== 0 && <div style={{...props, backgroundColor:"#efebe9"}} className="center">
                            <div className="row"><h3 className="center" style={{...h2Styles, ...props, marginTop:0}}>Directors</h3></div>
                            <div className="row center">
                                <div className="col m1"></div>
                                {directors.map((director) => <Fragment><div className="col s12 m4">
                                <div className="card hoverable" style={{width:300, height:600}}>
                                    <div className="card-image">
                                        <img src={director.image} style={{width:300, height:400}} />
                                        <span className="card-title">{director.name}</span>
                                    </div>
                                    <div className="card-content">
                                        <p>{director.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col m1"></div>
                            </Fragment>
                            )}
                            </div>
                        </div>
                        }
                        </div>
                    )}
                    </Spring>
                )}
                </VisibilitySensor>
                
            </div>

        </Fragment>
    );
}

const mapStateToProps = (state) => ({
    directors: state.directors.directors
});

export default connect(mapStateToProps, { getDirectors })(About);