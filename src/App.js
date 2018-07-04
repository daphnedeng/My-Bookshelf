/* App carries bookshelf */
import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Bookshelf from './BookShelf';
import SearchBooks from './SearchBooks';
import './App.css';
import { Link, Route } from "react-router-dom";

class ReadingBooks extends Component {
  state = {
    books: []
  }

  //render all books
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      // setState changes the state of books
      this.setState({
        books: books
      })
    })
  }

  //this function will filter book. return books which have the respective 'shelfName'
  getBooks(shelfName) {
    return this.state.books.filter((b) => b.shelf === shelfName)
  }

  //this function will update book base on its 'shelfName'
  changeShelf = (targetBook, targetShelf) => {
    BooksAPI.update(targetBook, targetShelf).then(() => {
      targetBook.shelf = targetShelf
      //after change targetBook's shelfName, update its state
      this.setState({
        //put the book to the end
        books: this.state.books.filter((b) => b.id !== targetBook.id).concat(targetBook)
      })
    })
  }

  render() {

    return (
      <div className="App">
        {/* this is the bookshelf screen */}
        <Route exact path="/" render={() => (
          <section>
            <header className="App-header">
              <nav>
                <h1>My Bookshelf</h1> 
                <Link to="search_books" className="search-link cool-link">Search Books</Link>
              </nav>
            </header>

            <Tabs>
              <TabList className="shelf-titles">
                <Tab className="book-shelf cool-link">Reading</Tab>
                <Tab className="book-shelf cool-link">Want To Read</Tab>
                <Tab className="book-shelf cool-link">Read</Tab>
              </TabList>

              <TabPanel>
                {/* call the getBooks function, books with the respective 'shelfName' will show up */}
                <Bookshelf books={this.getBooks('currentlyReading')} changeShelf={this.changeShelf} />
              </TabPanel>
              <TabPanel>
                <Bookshelf books={this.getBooks('wantToRead')} changeShelf={this.changeShelf} />
              </TabPanel>
              <TabPanel>
                <Bookshelf books={this.getBooks('read')} changeShelf={this.changeShelf} />
              </TabPanel>
            </Tabs> 
          </section> 
        )} />

        {/* this is the search book screen */}
        <Route path="/search_books" render={() => (
          // the state of books has been update, so it should use this.state.books      
          <SearchBooks changeShelf={this.changeShelf} books={this.state.books}/> 
        )}/>       
      </div>
    );
  }
}

export default ReadingBooks;
