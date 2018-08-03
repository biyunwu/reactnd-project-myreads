import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';

export default class BooksApp extends React.Component {
    state = {
        books: [],
    }

    getBooksFromServer = () => BooksAPI.getAll().then(books => this.setState({books}))

    componentDidMount(){
        this.getBooksFromServer()
    }

    onShelfChange = (evt) => {
        const targetBook = this.state.books.filter(book => book.id === evt.target.id)
        BooksAPI.update(targetBook[0], evt.target.value).then(() => this.getBooksFromServer())
    }

    // onSearchChange = (evt) => {
    //     console.log(evt.target.value)
    //     // BooksAPI.search(evt.target.value)
    // }

    render() {
        const currentlyReading = [], wantToRead = [], read =[], uncategorized = []
        this.state.books.forEach(book => {
            switch(book.shelf){
                case 'currentlyReading': currentlyReading.push(book); break;
                case 'wantToRead': wantToRead.push(book); break;
                case 'read': read.push(book); break;
                default: uncategorized.push(book);
            }
        })
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <HomePage
                        books={{currentlyReading, wantToRead, read}} 
                        onShelfChange={this.onShelfChange} 
                    />
                )}/>
                <Route path='/create' render={() => (
                    <SearchPage
                        // books={this.state.books}
                        onShelfChange={this.onShelfChange}
                        // onSearchChange={this.onSearchChange}
                    />
                )}/>
            </div>
        )
    }
}