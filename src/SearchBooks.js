import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Link, Route } from "react-router-dom";
import Books from './Books';
import PropTypes from "prop-types";

class SearchBooks extends Component {
    static propTypes = {
        changeShelf: PropTypes.func.isRequired,
        availableBooks: PropTypes.array.isRequired
      }

    state = {
        query: '',
        searchResults: []
    }

    searchBooks = (query, availableBooks) => {
        BooksAPI.search(query, 20).then(books => {
            //if there's no error
            if (!books.error) {
                books.forEach(book => {
                    availableBooks.forEach(item => {
                        //update the shelf
                        if (item.id === book.id) {
                            book.shelf = item.shelf
                        }
                    })
                })
                //shows the state of books
                this.setState( {searchResults: books })
            } else {
                this.setState( {searchResults: [] })
            }            
        }).catch((e) => {
            this.setState( {searchResults: [] })
        })
    }

    updateQuery = (query, availableBooks) => {
        this.setState({
            query: query
        }, this.searchBooks(query, availableBooks))
    }

    updateShelf = (targetBook, targetShelf) => {
        targetBook.shelf = targetShelf
        this.setState(state => {
            this.setState({searchResults: state.searchResults})
        })
    }

    render() {
        const { query, searchResults } = this.state
        const { changeShelf, availableBooks } = this.props
        console.log(query)
        return(
            <section>
                <header className="search-header">
                    <Link className="close-search" to="/">Home</Link>
                    <input type="text" placeholder="Search by Title or Author" value={query} onChange={(e) => this.updateQuery(e.target.value, availableBooks)}/>
                </header>

                {searchResults && searchResults.map(book => (
                    <Books key={book.id} book={book} changeShelf={changeShelf} />
                ))}                
            </section>
        )
    }
}

export default SearchBooks;

