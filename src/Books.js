/* render book info from API */
import React, { Component } from 'react';
import PropTypes from "prop-types";

class Books extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        changeShelf: PropTypes.func.isRequired       
    }

    render() {
        //equivalent of const changeShelf = this.props.changeShelf
        const { changeShelf, book } = this.props;

        return(
            <div className="book-container">
                <div className="book-details">                
                {/* props: pass API data into component */}
                    <img src={book.imageLinks.thumbnail} alt={`book cover of ${book.title}`}/>
                    <p>Book Title: {book.title}. {book.subtitle}</p>
                    <p>Written By: {book.authors}</p>
                </div> 

                {/* onChange function invokes, which changes book shelfName base on the string of value='string'. This function lives in App.js */}
                <select value={book.shelf} onChange={(e) => changeShelf(book, e.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="remove">Remove this Book</option>
                </select>
            </div>
        )
    }
}

export default Books;