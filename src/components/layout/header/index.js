import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './header.scss'

export default class Header extends Component {
    render() {
        return (
            <div className = "headerContainer__section">
                <div className = "coverImage__section"></div>
                <div className = "navBar__section">
                    <div className = "Logo__section"><h2>PLATINO CERAMIC</h2></div>
                    <div className = "userFeautures__section">
                        <div className = "singleFeature__Section">
                            <i className="fas fa-search" style = {{marginRight: '5px'}}></i>
                            Let's Search
                        </div>
                        <Link className = "singleFeature__Section" to = "#">
                            <div className = "accountLink">
                                <i className="fas fa-user" style = {{marginRight: '8px'}}></i>
                                My account
                            </div>
                        </Link>
                        <div className = "singleFeature__Section">
                            <i className="fas fa-shopping-bag" style = {{marginRight: '5px'}}></i>
                            cart($0)
                        </div>
                    </div>
                </div>
                <div className = "headerText__section">When quality and Creativity Meet At One Point.</div>
            </div>
        )
    }
}
