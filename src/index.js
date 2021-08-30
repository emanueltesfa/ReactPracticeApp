//format alt-shift-f
//block comment alt-shift-a
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { booksData } from "./booksData";
import Book from "./Book";

function BookList() {
  return (
    <section className="bookList">
      {booksData.map((book) => {
        return (
          <Book key={book.id} /* spread js6 {...book} */ book={book}></Book>
        );
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));

/* style={{ color: '#617d98', fontSize='0.75rem', marginTop='0.25rem' }} */
/* const Book = (img, title, author) => { */
//const { img, title, author } = props;
