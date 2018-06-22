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

	// SUGGESTION:
	// Implement a function 'updateMain' here to get the updated books from server.
	// Pass it down to Books as a prop.
	updateMain = async (...params) => {
		// Get updated books from server

		// How will you store the results, so that you can
		// pass them down to your BookShelf components?
		// Maybe use local state? When local state changes,
		// the component will re-render...  

		// Something like what you had started with componentDidMount 
		// seems right. :)
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
						<Bookshelf
							books={this.getBooks('currentlyReading')}
							updateMain={this.updateMain} />
					</TabPanel>
					<TabPanel>
						<Bookshelf
							books={this.getBooks('wantToRead')}
							updateMain={this.updateMain} />
					</TabPanel>
					<TabPanel>
						<Bookshelf
							books={this.getBooks('read')}
							updateMain={this.updateMain} />
					</TabPanel>
				</Tabs>
			</div>
		);
	}
}

export default ReadingBooks;
