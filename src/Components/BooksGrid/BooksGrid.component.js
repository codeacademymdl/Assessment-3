import React, { Component } from 'react';
// import './BooksGrid.css';
import Books from '../Books/Books.component'

class BooksGrid extends Component {
    render() {
        // console.log(this.props)
        return (
            
            
            <div>
                <fieldset>
                    <legend align="center">{this.props.author}</legend>
                    {
                        this.props.books.map((book,index)=>{
                            return <Books
                            Name={book.Name}
                            rating={book.rating}
                            imageSrc = {`./cover_image.jpeg`}
                            
                            ></Books>
                        })
                    }

                </fieldset>
                </div>

            
        )
    }
}

export default BooksGrid;
