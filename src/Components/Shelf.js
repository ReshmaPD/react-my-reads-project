import React, { Component } from "react";
import Book from "./Book";

class shelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.bookList.map(book => {
              return (
                <li key={book.id}>
                  <Book
                    book={book}
                    changeShelf={this.props.changeShelf}
                    currentShelf={this.props.currentShelf}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default shelf;
