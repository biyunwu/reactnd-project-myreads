import React, { Component } from 'react'
import sortBy from 'sort-by'

export default class BookShelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelf}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books && this.props.books.sort(sortBy('title')).map(book => 
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})`}}></div>
                                        <div className="book-shelf-changer">
                                            <select id={book.id} defaultValue={book.shelf || 'none'} onChange={this.props.onShelfChange}>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors && book.authors.join(", ")}</div>
                                </div>
                            </li>
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}