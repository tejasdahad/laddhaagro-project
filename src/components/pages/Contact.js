import React, { useState, Fragment } from 'react';
import './Contact.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [query, setQuery] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        /*const state = {
            name,
            email,
            phone,
            query
        };*/
        sendFeedback("1", {message_html: `My phone number is ${phone}. My email id is ${email}. I wanted to know about ${query}.`, from_name: name, reply_to: email })
        setQuery('');
        setName('');
        setPhone('');
        setEmail('');
    }

    const sendFeedback = (templateId, variables) => {
        /*const state = {
            name,
            email,
            phone,
            query
        };*/
        window.emailjs.send('gmail',  'template_xoQtcWCs', variables, 'user_z1aRq6nlDEVNq9tutcj8V')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      }
    return (
        <div>
        <div style={{paddingTop:10, paddingBottom:10}}>
            <Grid container spacing={2}> 
                <Grid md={1}></Grid>
                <Grid item xs={12} md={3}>
                <div className="card" style={{marginTop:10}}>
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="images/pipes.jpg" alt="pipes" style={{width:500, height:400}} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Contact us</span>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4"><h3>Contact</h3><i className="material-icons right">close</i></span>
                    <address>
                        <h4>Address</h4>
                        <p>G-125,126</p>
                        <p>MIDC AREA, JALGAON-425002</p>
                        <p>MAHARASHTRA,INDIA</p>
                        <h4>Call us at</h4>
                        <p><a className="waves-effect waves-light" href="tel:+919422283974"><i className="material-icons">call</i>+91-9422283974</a></p>
                        <h4>Mail us</h4>
                        <p><a href="mailto:laddhaagro@gmail.com"><i className="material-icons">mail</i>laddhagroplast@gmail.com</a></p>
                    </address>
                </div>
            </div>
                </Grid>
                <Grid md={2}></Grid>
                <Grid item xs={12} md={5} style={{marginTop:10}}>
                        <fieldset className="location" style={{padding:0, borderRadius:30}}>
        {//                <h4><i className="material-icons hide-on-med-and-down">grade</i>  Where to find us?  <i className="material-icons hide-on-med-and-down">grade</i></h4>
        }                <div className="section" style={{paddingTop:0,paddingBottom:0}}>
                            <iframe className="iframs" title="google location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.0827953490043!2d75.59206931403229!3d20.989317986019724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU5JzIxLjUiTiA3NcKwMzUnMzkuMyJF!5e0!3m2!1sen!2sin!4v1582119764829!5m2!1sen!2sin" width="100%" height="80%" frameBorder="10" style={{border:0, padding:0,margin:0}} allowFullScreen=""></iframe>
                        </div>
                        </fieldset>
                </Grid>
                <Grid item xs={12}>

                </Grid>
            </Grid>
            
            
            <div className="container">
            <div className="bg-img" style={{marginTop:10}}>
                <form className="container1" onSubmit={onSubmit}>
                    <h1>Enquiry</h1>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />

                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="validate" />

                    <label htmlFor="query">What do you want to enquire?</label>
                    <textarea id="query" value={query} onChange={(e) => setQuery(e.target.value)} className="validate" />

                    <button type="submit" className="btn1">Submit</button>
                </form>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Contact;