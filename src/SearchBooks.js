import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Link, Route } from "react-router-dom";
import Books from './Books';
import BookShelf from './BookShelf';
import PropTypes from "prop-types";

class SearchBooks extends Component {
    static propTypes = {
        availableBooks: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
    }

    state = {
        query: '',
        searchResults: [],
        noResult: false
    }

    findBooks = (event) => {
        const query = event.target.value.trim()
        this.setState({ 
            query: query 
        })

        if (query) {
            //if user input then run the search
            BooksAPI.search(query).then(availableBooks => {
                //if everything works find, show the books
                if (!availableBooks.error) {
                    this.setState({
                        searchResults: availableBooks,
                        noResult: false
                    })
                }
                //otherwise, show an empty page and set noResult to true
                else {
                    this.setState({
                        searchResults: [],
                        noResult: true
                    })
                }
            })
        }
    } 

    //add the book to my-bookshelf
    changeShelf = (targetBook, targetShelf) => {
        targetBook.shelf = targetShelf
        this.setState(state => {
            this.setState({searchResults: state.searchResults})
        })
    }

    render() {
        console.log(this.props.bookShelf)
        const { changeShelf } = this.props; 
        return(
           <section className="search-page">
                <header className="search-header">
                    <nav>                                       
                        <input type="text" placeholder="Search by Title or Author" value={this.state.query} onChange={this.findBooks} />
                        <Link className="cool-link back-to-home" to="/">Back to Home</Link>
                    </nav> 
                </header>

                {/* because noResult = true, show this mesg */}
                {this.state.noResult && (
                    <div>
                        <h3>The book you are looking for is not in stock yet.</h3>
                    </div>
                )}

                {this.state.searchResults.map(book => (
                    <Books key={book.id} book={book} changeShelf={changeShelf} />
                ))}
           </section>                                                               
        )
    }
}

export default SearchBooks;