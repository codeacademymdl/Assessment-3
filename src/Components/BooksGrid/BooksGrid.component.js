import React, { Component } from 'react';
import './BooksGrid.css';
import Books from '../Books/Books.component'

class BooksGrid extends Component {
    render() {
        // console.log(this.props)
        return (
            
            
            <div className="main">
                <fieldset className="authorGrid">
                
                    <legend align="center">{this.props.author}</legend>
                    <div className="innerDiv">
                    {
                        this.props.books.map((book,index)=>{
                            return <Books
                            Name={book.Name}
                            rating={book.rating}
                            imageSrc = {`./cover_image.jpeg`}
                            colorIndex={index}
                            bookId={book.id}
                            
                            ></Books>
                        })
                    }
                </div>
                </fieldset>
                </div>

            
        )
    }
}

export default BooksGrid;
