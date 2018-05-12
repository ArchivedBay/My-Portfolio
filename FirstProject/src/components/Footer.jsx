import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <footer className="footer">
                <div className="container">
                    <Link to="/">My website &copy; {new Date().getFullYear()}</Link>
                </div>
            </footer>
        );
    };
}

export default Footer;