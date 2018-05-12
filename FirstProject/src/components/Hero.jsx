import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component{
    render(){
        return(
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h3 className="display-3">{this.props.title}</h3>
                    <p className="lead">{this.props.subtitle}</p>
                </div>
            </div>
        );
    }

}
export default Hero;