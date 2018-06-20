/* render book info from API
 each book carries the changer */
import React, { Component } from 'react';
import ChangeShelf from './changeShelf';

class Books extends Component {
    render() {
        return(
            <div className="book-container">
                <div className="book-details">                
                {/* props: pass API data into component */}
                    <img src={this.props.book.imageLinks.thumbnail} alt={`book cover of ${this.props.book.title}`}/>
                    <p>Book Title: {this.props.book.title}. {this.props.book.subtitle}</p>
                    <p>Written By: {this.props.book.authors}</p>
                </div> 
                {/* when select an option, update the book accordingly */}
                <ChangeShelf changeShelf={this.props.changeShelf}/>
            </div>
        )
    }
}

export default Books;