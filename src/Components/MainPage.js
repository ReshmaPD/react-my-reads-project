import React, { Component } from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

class MainPage extends Component {
  render() {
    const shelves = ["currentlyReading", "wantToRead", "read"];

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              shelfTitle="Currently Reading"
              bookList={this.props.books.filter(
                book => book.shelf === shelves[0]
              )}
              changeShelf={this.props.changeShelf}
              currentShelf={"currentlyReading"}
            />

            <Shelf
              shelfTitle="Want to Read"
              bookList={this.props.books.filter(
                book => book.shelf === shelves[1]
              )}
              changeShelf={this.props.changeShelf}
              currentShelf={"wantToRead"}
            />

            <Shelf
              shelfTitle="Read"
              bookList={this.props.books.filter(
                book => book.shelf === shelves[2]
              )}
              changeShelf={this.props.changeShelf}
              currentShelf={"read"}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
