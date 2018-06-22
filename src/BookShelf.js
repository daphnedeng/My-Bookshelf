/* bookshelf carries books*/
import React, { Component } from 'react';
import Books from './Books';

class Bookshelf extends Component {

    render() {
        return (
            <section>                
                {this.props.books.map((book) =>
                    // .map() will render all books, for each book in books, showing a specific book info
                    <Books key={book.id} book={book} changeShelf={this.props.changeShelf} />
                )}
            </section>

        )
    }
}


export default Bookshelf;