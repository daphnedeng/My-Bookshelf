/*App carries bookshelf*/

import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Bookshelf from './BookShelf';
import './App.css';
import { Route } from "react-router-dom";
import 'react-tabs/style/react-tabs.css';

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
            <Bookshelf books={this.state.books}/>
          </TabPanel>
          <TabPanel>
            Books Going to read !! need to configure the state
            <Bookshelf books={this.state.books}/>
          </TabPanel>
          <TabPanel>
            I already read need to configure the state too!!
            <Bookshelf books={this.state.books}/>
          </TabPanel>
        </Tabs> 
      </div>
    );
  }
}

export default ReadingBooks;
