/* bookshelf carries books*/
import React, { Component } from 'react';
import Books from './Books';
import PropTypes from "prop-types";

class Bookshelf extends Component {
    static propTypes = {
        changeShelf: PropTypes.func.isRequired,
        books: PropTypes.array.isRequired
    }

    render() {
        /*equivalent of const changeShelf = this.props.changeShelf. const books = this.props.books
        books is an array */
        const { books, changeShelf } = this.props;
                
        return (
            <section>                
                {books.map((book) =>
                    //.map() will render all books, for each book in books, showing a specific book info
                    <Books key={book.id} book={book} changeShelf={changeShelf} />
                )}
            </section>

        )
    }
}


export default Bookshelf;