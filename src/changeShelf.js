/* move books to different shelf */
import React, { Component } from 'react';

console.log(this.props)

class ChangeShelf extends Component {
    // state = {
    //     currentShelf: this.props.shelf,
    //     update: false
    // }

    // changeShelf = (e) => {
    //     //change book.shelf's value to selection's value
    //     this.props.changeShelf(this.props.book, e.target.value)
    //     this.setState({
    //         currentShelf: e.target.value,
    //         update: true
    //     })
    // } 

    // //invoked whenever the component is about to receive brand new props
    // componentWillReceiveProps() {
    //     this.setState({
    //         update: false
    //     })
    // }

    render() {
        const { book, books, changeShelf } = this.props

        // set current shelf to none as default
        let currentShelf = 'none'
    
        // if book is in current list, set current shelf to book.shelf
        for (let item of books ) {
          if (item.id === book.id)  {
            currentShelf = item.shelf
            break
          }
        }

        return(
            <select value={currentShelf} onChange={(event) => changeShelf(book, event.target.value)}>
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