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
        // const targetBook = this.state.books.filter(book => book.id === evt.target.id)
        // BooksAPI.update(targetBook[0], evt.target.value).then(() => this.getBooksFromServer())
        BooksAPI.update({id: evt.target.id}, evt.target.value).then((existIdsObj) => {this.getBooksFromServer(), console.log(existIdsObj)})
    }

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <HomePage
                        books = {this.state.books}
                        onShelfChange={this.onShelfChange} 
                    />
                )}/>
                <Route path='/create' render={() => (
                    <SearchPage
                        existBooks={this.state.books}
                        onShelfChange={this.onShelfChange}
                        // onSearchChange={this.onSearchChange}
                    />
                )}/>
            </div>
        )
    }
}