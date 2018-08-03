import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from "react-router-dom"

export default class SearchPage extends Component{
    render(){
        return (
            <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={this.props.onSearchChange}/>
                </div>
            </div>
                <div className="search-books-results">
                <ol className="books-grid">
                    <BookShelf
                        shelf='Search Result'
                        books={this.props.books}
                        onShelfChange={this.props.onShelfChange}
                    />
                </ol>
                </div>
            </div>
        )
    }
}