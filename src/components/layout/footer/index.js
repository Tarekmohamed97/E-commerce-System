import React, { Component } from 'react';
import "./footer.scss";
import "../header/header.scss"


export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className = "subscribeAndAboutUs__section">
                    <div className = "subscribe__section">
                        <div className = "subscribeText__section">Subscribe to our newsletter</div>
                        <div  className = "emailInput__section" >
                            <i className="fas fa-envelope emaiIcon"></i>
                            <input type =  "text" placeholder = "Enter your e-mail" />
                            <button className = "subscribeButton">Subscribe</button>
                        </div>
                    </div>
                    <div className = "aboutUs__section">
                        <div className = "collectionsContacts__Section">
                            <div className = "collection__section">
                                <div
                                  style = {{color: 'white', fontWeight: 'bold', fontSize: '110%', marginBottom: 25,paddingBottom:4 ,borderBottom: '3px solid rgb(34, 167, 207)'}}>
                                      Collections
                                </div>
                                <a href = "#" style = {{marginBottom: 8}}>Wall Collections</a>
                                <a href = "#" style = {{marginBottom: 8}}>Floor Collections</a>
                                <a href = "#" style = {{marginBottom: 8}}>Decor Collections</a>
                            </div>
                            <div className = "collection__section">
                                <div
                                 style = {{color: 'white', fontWeight: 'bold', fontSize: '110%',marginBottom: 25,paddingBottom:4 ,borderBottom: '3px solid rgb(34, 167, 207)'}}>
                                    Platino
                                    </div>
                                <a href = "#" style = {{marginBottom: 8}}>About us</a>
                                <a href = "#" style = {{marginBottom: 8}}>Contact us</a>
                                <a href = "#" style = {{marginBottom: 8}}>Branches</a>
                            </div>
                        </div>
                        <div className = "aboutCeramic__seciotn">
                            <div style = {{color: 'rgb(202, 200, 200)', marginTop: -23}}><h2>PLATINO CERAMIC</h2></div>
                            <div>
                                A ceramic is any of the various hard, brittle, heat-resistant and corrision-resistant
                                materials made by shaping and then firing a nonmetalic mineral, such as clay, at a 
                                high temperature
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "copyRights__section">
                    <div>&copy;2020 Platino All rights reserved.</div>
                    <div>Powered by <span style = {{color: 'white', fontWeight: 'bold', fontSize: '140%'}}>nasnav</span></div>
                </div>
            </div>
        )
    }
}
