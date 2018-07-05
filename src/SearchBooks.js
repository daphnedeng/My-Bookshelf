import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Link, Route } from "react-router-dom";
import Books from './Books';
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
                //if everything works find
                if (!availableBooks.error) { 
                    //compare book's shelfName. If already exists then show the existing shelfName
                    availableBooks.forEach((newbook) => {
                        this.props.books.forEach((existbook) => {
                            if (existbook.id === newbook.id) {
                                newbook.shelf = existbook.shelf
                            }
                        })
                    }) 
                    //no error, show the books                  
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

    render() {
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
                        <h3>{this.state.query} is not in stock yet.</h3>
                    </div>
                )}

                <div className="book-shelf-container">
                {this.state.searchResults.map(book => (
                    <Books key={book.id} book={book} changeShelf={changeShelf} />
                ))}
                </div>
           </section>                                                               
        )
    }
}

export default SearchBooks;