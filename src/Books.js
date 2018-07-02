/* render book info from API */
import React, { Component } from 'react';
import PropTypes from "prop-types";
import noCover from './icons/no-cover-image.png';

class Books extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        changeShelf: PropTypes.func.isRequired       
    }

    render() {
        //equivalent of const changeShelf = this.props.changeShelf
        const { changeShelf, book } = this.props;
        
        //add fallbacks for missing cover images and title to prevent error
        const coverImg = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : noCover
        const title = book.title ? book.title : "No title available"
        const authors = book.authors ? book.authors : "Anonymous"

        return(
            <div className="book-container">
                <div className="book-details">                
                {/* props: pass API data into component */}
                    <img src={coverImg} alt={`book cover of ${title}`}/>
                    <p>Book Title: {title}. {book.subtitle}</p>
                    <p>Written By: {authors}</p>
                </div> 

                {/* onChange function invokes, which changes book shelfName base on the string of value='string'. This function lives in App.js */}
                <select value={book.shelf ? book.shelf: "none"} onChange={(e) => changeShelf(book, e.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default Books;