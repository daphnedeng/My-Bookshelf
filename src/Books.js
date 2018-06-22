/* render book info from API */
import React, { Component } from 'react';

class Books extends Component {
    
    render() {
        const { changeShelf } = this.props;

        return(
            <div className="book-container">
                <div className="book-details">                
                {/* props: pass API data into component */}
                    <img src={this.props.book.imageLinks.thumbnail} alt={`book cover of ${this.props.book.title}`}/>
                    <p>Book Title: {this.props.book.title}. {this.props.book.subtitle}</p>
                    <p>Written By: {this.props.book.authors}</p>
                </div> 

                <select value={this.props.book.shelf} onChange={(e) => changeShelf(this.props.book, e.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="remove">Remove this Book</option>
                </select>
            </div>
        )
    }
}

export default Books;
