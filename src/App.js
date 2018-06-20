/*App carries bookshelf*/

import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Bookshelf from './BookShelf';
import './App.css';
import { Route } from "react-router-dom";

class ReadingBooks extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      // setState changes the state of books
      this.setState({
        books
      })
    })
  }

  //the function will filter book. return books which b.shelf === books[i]['shelf']
  getBooks(onshelf) {
    return this.state.books.filter((b) => b.shelf === onshelf)
  }

  changShelf = (targetBook, targetShelf) => {
    BooksAPI.update(targetBook, targetShelf).then(() => {
      targetBook.shelf = targetShelf;
      this.setState((state) => ({
        books: 
      }))
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <h1>My Bookshelf</h1> 
          </nav>
        </header>
        <Tabs>
          <TabList className="shelf-titles">
            <Tab className="book-shelf">Reading</Tab>
            <Tab className="book-shelf">Want To Read</Tab>
            <Tab className="book-shelf">Read</Tab>
          </TabList>

          <TabPanel>
            {/* call the getBooks function, books with the respective 'shelfName' will show up */}
            <Bookshelf books={this.getBooks('currentlyReading')}/>
          </TabPanel>
          <TabPanel>
            <Bookshelf books={this.getBooks('wantToRead')}/>
          </TabPanel>
          <TabPanel>
            <Bookshelf books={this.getBooks('read')}/>
          </TabPanel>
        </Tabs> 
      </div>
    );
  }
}

export default ReadingBooks;
