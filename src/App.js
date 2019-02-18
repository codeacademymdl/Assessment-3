import React, { Component } from 'react';
import './App.css';
// import Books from './Components/Books/Books.component';

import axios from 'axios';
import BooksAuthor from './Components/BooksAuthor/BooksAuthor.component'


import Header from './Components/Header/Header.component'

class App extends Component {
    


    state = {
        books: [],
        author:[]
    }

    async componentDidMount() {

        const booksFetched = await axios.get('http://localhost:8080/books');
        
        this.setState({
            books: booksFetched.data,
            author:Object.keys(booksFetched.data)

        })
        console.log(this.state)

    }


  render() {
     
    return (
        
      <div>
     <Header/>
      <BooksAuthor authors={this.state.author} books={this.state.books}/>
      
      </div>
    );
  }
}

export default App;
