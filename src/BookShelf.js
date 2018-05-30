import React, { Component } from 'react';
import Books from './Books';

class Bookshelf extends Component {
    render() {
        console.log(this.props)
        return (
            <section>
                {this.props.books.map((book) =>
                    <Books key={book.id} book={book}/>
                )}
            </section>

        )
    }
}


export default Bookshelf;