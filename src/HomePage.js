import React, { Component } from 'react'
import BookShelf from './BookShelf'

export default class HomePage extends Component{
    render(){
        return (
            <div>
                <BookShelf shelf='Current Reading' books={this.props.books.currentlyReading} onShelfChange={this.props.onShelfChange}/>
                <BookShelf shelf='Want to Read' books={this.props.books.wantToRead} onShelfChange={this.props.onShelfChange}/>
                <BookShelf shelf='Read' books={this.props.books.read} onShelfChange={this.props.onShelfChange}/>
            </div>
        )
    }
}