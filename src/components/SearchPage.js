import React, { Component } from 'react'
import BookShelf from './BookShelf'
import * as BooksAPI from '../BooksAPI'
import { Link } from "react-router-dom"

export default class SearchPage extends Component{
    state = {
        query: ''
    }

    onSearchChange = (evt) => {
        console.log(evt.target.value)
        this.setState({query: evt.target.value.trim()})
    }

    render(){
        const { query } = this.state
        let books
        if(query){
            BooksAPI.search(query).then(function(allBooks){
                // Deal with retued allBooks
            })
        } else {
            books = []
        }
        console.log(books);


        return (
            <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={this.onSearchChange}/>
                </div>
            </div>
                <div className="search-books-results">
                    <BookShelf
                        shelf='Search Result'
                        books={books}
                        onShelfChange={this.props.onShelfChange}
                    />
                </div>
            </div>
        )
    }
}