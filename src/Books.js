import React, { Component } from 'react';

class Books extends Component {
    render() {
        return(
            <div>
                <div className="book-cover" style={{backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`}}></div>
                <div className="book-details">
                    <p>Book Title: {this.props.book.title}. {this.props.book.subtitle}</p>
                    <p>Written By: {this.props.book.authors}</p>
                </div> 
            </div>
        )
    }
}

export default Books;