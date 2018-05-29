import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import BookList from './BookList';
import './App.css';
import { Route } from "react-router-dom";

class ReadingBooks extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
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
          <TabList>
            <Tab>Reading</Tab>
            <Tab>Want To Read</Tab>
            <Tab>Read</Tab>
          </TabList>

          <TabPanel>
            <BookList books={this.state.books}/>
          </TabPanel>
          <TabPanel>
            Books Going to read
          </TabPanel>
          <TabPanel>
            I already read
          </TabPanel>
        </Tabs> 
      </div>
    );
  }
}

export default ReadingBooks;
