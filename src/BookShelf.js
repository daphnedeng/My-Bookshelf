/* bookshelf carries books*/
import React, { Component } from 'react';
import Books from './Books';
import { update } from './BooksAPI';

class Bookshelf extends Component {
    state = {};

    render() {
        console.log(this.props);
        return (
            <section>
                {this.props.books.map((book) =>
                    // .map() will render all books, for each book in books, showing a specific book info
                    <Books 
                        key={book.id} 
                        book={book}
                        updateMain={this.props.updateMain}/>
                )}
            </section>

        )
    }
}


export default Bookshelf;