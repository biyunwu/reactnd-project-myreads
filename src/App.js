import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import HomePage from './HomePage';
import SearchPage from './SearchPage';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
  }

  getBooksFromServer = () => BooksAPI.getAll().then(books => this.setState({books}))

  componentDidMount(){
    this.getBooksFromServer()
  }

  onShelfChange = (evt) =>{
    const targetBook = this.state.books.filter(book => book.id === evt.target.id)
    BooksAPI.update(targetBook[0], evt.target.value).then(() => this.getBooksFromServer())
  }

  render() {
    const currentlyReading = [], wantToRead = [], read =[]
    this.state.books.forEach(book => {
      const shelf = book.shelf;
      if(shelf === 'currentlyReading'){
        currentlyReading.push(book)
      } else if (shelf === 'wantToRead'){
        wantToRead.push(book);
      } else if (shelf === 'read'){
        read.push(book);
      }
    })

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <HomePage 
            books={{currentlyReading, wantToRead, read}} 
            onShelfChange={this.onShelfChange} 
            showSearchPage={this.showSearchPage}
          />
        )}/>
        <Route path='/create' render={() => (
          <SearchPage/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
