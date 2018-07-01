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
        const { changeShelf, books, bookshelf } = this.props;  
        
        return(
           <section>

                <header className="search-header">
                    <Link className="close-search" to="/">Home</Link>
                    <input type="text" placeholder="Search by Title or Author" value={this.state.query} onChange={this.findBooks} />
                </header>

                {/* because noResult = true, show this mesg */}
                {this.state.noResult && (
                    <div>
                        <h3>Sorry, We can't find any books that match your search at this moment.</h3>
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