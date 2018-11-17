import React, { Component } from "react";
import { Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import SearchPage from "./Components/SearchPage";
import "./App.css";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends Component {
  // state that holds all the books in the shelf
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
  }

  /**
   * Once the component has been mounted, the componentDidMount() lifecycle event occurs
   * The getAll() method request from the BooksAPI is run which sends a request to the its
   * database.When the data(books) is returned, setState() is called and which updates the
   * state books: books.Setting state in this method will trigger a re-rendering
   */
  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  };

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books
          .filter(prevBook => prevBook.id !== book.id)
          .concat([book])
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <MainPage books={this.state.books} changeShelf={this.changeShelf} />
          )}
        />

        <Route
          path="/search"
          render={() => (
            <SearchPage
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
