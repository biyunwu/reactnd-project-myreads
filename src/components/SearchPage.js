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
            // Fetch books form server
            BooksAPI.search(query).then(books => {
                if(books.length > 0){
                    // Get rid of books that exist on user's shelves
                    const existIds = this.props.existBooks.map(exb => exb.id)
                    const filteredBooks = books.filter(book => !existIds.includes(book.id))
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

    onShelfChange = (evt) => {
        // When a book in the Search page is added to user's shelf, it is going to be removed.
        const [bookId, shelf] = [evt.target.id, evt.target.value]
        if(shelf !== 'none'){
            const updatedSearchedBooks = this.state.searchedBooks.filter(book => book.id !== bookId)
            this.setState({searchedBooks: updatedSearchedBooks})
        }
        // Call the parent component's main .onShelfChange function in order to update books info in the Home page.
        this.props.onShelfChange(evt)
    }

    render(){
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
                        onShelfChange={this.onShelfChange}
                    />
                </div>
            </div>
        )
    }
}