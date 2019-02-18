import React, { Component } from 'react';

import BooksGrid from '../BooksGrid/BooksGrid.component';
import './booksAuthor.css'

class BooksAuthor extends Component {
    render() {
        // console.log("inside bookauthor compo")
        // console.log(this.props.books["J K Rowling"])
        return (



            <div clasName="main">
            {
              this.props.authors.map((author, index) => {
                return <BooksGrid
                books={this.props.books[author]} 
                author={author}                
                key={index}
                ></BooksGrid>
              })
            }
          </div>
            
        );
    }
}

export default BooksAuthor;
