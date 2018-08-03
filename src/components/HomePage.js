import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

export default class HomePage extends Component{
    render(){
        const currentlyReading = [], wantToRead = [], read =[], uncategorized = [], onShelfChange = this.props.onShelfChange
        this.props.books.forEach(book => {
            switch(book.shelf){
                case 'currentlyReading': currentlyReading.push(book); break;
                case 'wantToRead': wantToRead.push(book); break;
                case 'read': read.push(book); break;
                default: uncategorized.push(book);
            }
        })
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <BookShelf
                        shelf='Current Reading'
                        books={currentlyReading}
                        onShelfChange={onShelfChange}
                    />
                    <BookShelf
                        shelf='Want to Read'
                        books={wantToRead}
                        onShelfChange={onShelfChange}
                    />
                    <BookShelf
                        shelf='Read'
                        books={read}
                        onShelfChange={onShelfChange}
                    />
                </div>
                <div className="open-search">
                    <Link to='/create'>Add a book</Link>
                </div>
            </div>
        )
    }
}