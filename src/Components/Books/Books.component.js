import React, { Component } from 'react';
import './Books.css';
import BlackHeartImage from '../../Icons/heart-black.svg'
import RedHeartImage from '../../Icons/heart-red.svg';
import axios from 'axios';

class Books extends Component {


    state = {
        isLike: true,
        bookLikeStatus:0,
    }
    likeDislike = async() => {
        this.setState({
            isLike: !this.state.isLike,
            bookLikeStatus:this.state.bookLikeStatus===0?1:0,
        })
        await axios.put(`http://localhost:8080/book/like/${this.props.bookId}/${this.state.bookLikeStatus}`);

        

    }
    getImage = () => this.state.isLike ? BlackHeartImage : RedHeartImage;
    cardColor = () => this.props.colorIndex % 2 === 0 ? "#FC9152" : "white"



    render() {

        return (
            <div className="book" style={{ backgroundColor: this.cardColor() }} >
                <img src={this.props.imageSrc} alt="book" className='image' />
                <div className="container">

                    <p className='title'>{this.props.Name}</p>
                    <div className="reaction">
                        <span>{this.props.rating}</span>
                        <img alt="" className="heart" src={this.getImage()} onClick={this.likeDislike} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Books;
