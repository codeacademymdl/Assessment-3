import React, { Component } from 'react';

import BooksGrid from '../BooksGrid/BooksGrid.component' 

class Books extends Component {
    render() {
        // console.log("inside bookauthor compo")
        // console.log(this.props.books["J K Rowling"])
        return (



            <div className="card_grid">
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

export default Books;
