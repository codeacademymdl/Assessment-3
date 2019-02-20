import React, { Component } from 'react';
import './App.css';
// import Books from './Components/Books/Books.component';

import axios from 'axios';
import BooksAuthor from './Components/BooksAuthor/BooksAuthor.component'


import Header from './Components/Header/Header.component'

class App extends Component {
    


    state = {
        books: [],
        author:[],
        count:0,
    }

    async componentDidMount() {

        const booksFetched = await axios.get('http://localhost:8080/books');
        
        this.setState({
            books: booksFetched.data,
            author: Object.keys(booksFetched.data)

        })
        console.log(this.state)

    }
    ReRender =()=>{
        this.setState({
            count:this.state.count+1,
        })
        

    }


  render() {
    console.log(this.state.count)

    return (
        
      <div key={this.state.count}>
     <Header click={this.ReRender}/>
     
     <BooksAuthor authors={this.state.author} books={this.state.books}/>
                 
      </div>
    );
  }
}

export default App;
