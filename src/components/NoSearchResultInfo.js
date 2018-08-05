import React, { Component } from 'react'

export default class NoSearchResultInfo extends Component{
    render(){
        return this.props.bookNum === 0 && (<h2 style={{display:'block', textAlign:'center'}}>Type keywords to search</h2>)
    }
}