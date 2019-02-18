import React, { Component } from 'react';

import BooksGrid from '../BooksGrid/BooksGrid.component' 

class Books extends Component {
    render() {
        return (



            <div className="card_grid">
            {
              this.props.authors.map((author, index) => {
                return <BooksGrid
                books={this.props.books.author} 
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
