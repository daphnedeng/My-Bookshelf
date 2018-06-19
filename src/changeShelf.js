/* move books to different shelf */
import React, { Component } from 'react';

console.log(this.props)

class ChangeShelf extends Component {
    state = {
        currentShelf: this.props.book.shelf
    }

    render() {
        return(
            <select value={this.state.currentShelf} onChange={this.changeShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentReads">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="remove">Remove this Book</option>
            </select>
        )
    }
}

export default ChangeShelf;