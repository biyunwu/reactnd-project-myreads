import React, { Component } from 'react'

export default class NoSearchResultInfo extends Component{
    render(){
        return this.props.bookNum === 0 && (<h3 style={{display:'block', color: 'grey', textAlign:'center'}}>Type/Modify keywords to search</h3>)
    }
}