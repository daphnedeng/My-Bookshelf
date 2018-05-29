import React, { Component } from 'react';

class BookList extends Component {
    render() {
        console.log(this.props)
        return (
            <section>
                {this.props.books.map((book) =>
                    <div key={book.id} className="book-cover" style={{backgroundImage: `url(${book.imageLinks.thumbnail})`}}> 
                        <div>
                            <p>Book Title: {book.title}, {book.subtitle}</p>
                            <p>Written By: {book.authors}</p>
                        </div>          
                    </div>
                )}
            </section>

        )
    }
}


export default BookList;