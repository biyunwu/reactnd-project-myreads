import React, { Component } from 'react'

export default class BookShelf extends Component {
    checkOption = (optionName, book) => optionName === book.shelf? 'selcted' : ''
    
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelf}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map(book => 
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                                        <div className="book-shelf-changer">
                                            <select>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading" selected={this.checkOption("currentlyReading", book)}>Currently Reading</option>
                                                <option value="wantToRead" selected={this.checkOption("wantToRead", book)}>Want to Read</option>
                                                <option value="read" selected={this.checkOption("read", book)}>Read</option>
                                                <option value="none" selected={this.checkOption("none", book)}>None</option> 
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors.join(", ")}</div>
                                </div>
                            </li>
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}