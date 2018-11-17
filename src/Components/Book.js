import React, { Component } from "react";
import PropTypes from "prop-types";

class Book extends Component {
  onBookShelfChange = e => {
    const shelf = e.target.value;
    this.props.changeShelf(this.props.book, shelf);
  };

  render() {
    const { book } = this.props;
    const imageThumbnail = book.imageLinks
      ? `url(${book.imageLinks.thumbnail})`
      : 'url("http://via.placeholder.com/200x13")';
    const author = book.authors ? book.authors[0] : "N/A";

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `${imageThumbnail}`
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={this.props.currentShelf}
              onChange={this.onBookShelfChange}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{author}</div>
      </div>
    );
  }
}

//Validating with PropTypes
Book.propTypes = {
  book: PropTypes.object.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default Book;
