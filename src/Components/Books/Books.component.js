import React, { Component } from 'react';
// import './Books.css';
import BlackHeartImage from '../../Icons/heart-black.svg'
import RedHeartImage from '../../Icons/heart-red.svg';

class Books extends Component {
    render() {

        return (
            <div> 
                <img src= {this.props.imageSrc} alt="abstract" className='image' />
                <div className="container">
                    
                    
                    <p className='title'>{this.props.Name}</p>
                   
                    <hr />
                    
                    <span>{this.props.rating}</span>
                    <img alt="" className="heart" src={BlackHeartImage} />
                </div>
            </div>
        );
    }
}

export default Books;
