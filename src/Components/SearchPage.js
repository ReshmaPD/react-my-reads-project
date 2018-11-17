import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
import sortBy from "sort-by";

class SearchPage extends Component {
  state = {
    query: "",
    searchedBooks: []
  };

  updateQuery = query => {
    this.setState({ query: query }, () => {
      this.searchingBooks(this.state.query.trim());
    });
  };

  searchingBooks = query => {
    if (query === "" || query === undefined) {
      this.setState({ searchedBooks: [] });
    } else if (query) {
      BooksAPI.search(query).then(searchedBooks => {
        if (searchedBooks.error) {
          this.setState({ searchedBooks: [] });
        } else {
          this.setState({ searchedBooks: searchedBooks });
        }
      });
    } else {
      this.setState({ searchedBooks: [] });
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchedBooks
              .sort(sortBy("title"))
              .map(searchedBook => {
                let shelf = "none";
                this.props.books
                  .filter(b => b.id === searchedBook.id)
                  .map(b => (shelf = b.shelf));
                return (
                  <li key={searchedBook.id}>
                    <Book
                      book={searchedBook}
                      changeShelf={this.props.changeShelf}
                      currentShelf={shelf}
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

export default SearchPage;
