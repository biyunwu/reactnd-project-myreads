import React, { Component } from 'react'
import BookShelf from './BookShelf'
import * as BooksAPI from '../BooksAPI'
import { Link } from "react-router-dom"

export default class SearchPage extends Component{
    state = {
        query: '',
        searchedBooks: []
    }

    onSearchChange = (query) => {
        if(query && query.length !== 0){
            BooksAPI.search(query).then(books => {
                if(books.length > 0){
                    const filteredBooks = books.map(book => (this.props.existBooks.filter((b) => b.id === book.id)))
                    if(filteredBooks.length > 0){
                        this.setState({query: query, searchedBooks: filteredBooks})
                    } else {
                        this.setState({query: '', searchedBooks: []})
                    } 
                }
            })
        } else {
            this.setState({query: '', searchedBooks: []})
        }
    }

    render(){
        console.log(this.state.searchedBooks)
        return (
            <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={(evt) => this.onSearchChange(evt.target.value.trim())}/>
                </div>
            </div>
                <div className="search-books-results">
                    <BookShelf
                        shelf='Search Result'
                        books={this.state.searchedBooks}
                        onShelfChange={this.props.onShelfChange}
                    />
                </div>
            </div>
        )
    }
}