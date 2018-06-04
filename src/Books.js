// this component contains a book cover and some info
import React, { Component } from 'react';

class Books extends Component {
    render() {
        return(
            <div className="book-container">
                <div className="book-details">
                    <img src={this.props.book.imageLinks.thumbnail} alt={`book cover of ${this.props.book.title}`}/>
                    <p>Book Title: {this.props.book.title}. {this.props.book.subtitle}</p>
                    <p>Written By: {this.props.book.authors}</p>
                </div> 
            </div>
        )
    }
}

export default Books;