//format alt-shift-f
//block comment alt-shift-a
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const books = [
  {
    title: "Rich Dad, Poor Dad",
    author: "Robert T. Kiyosak",
    img: "https://images-na.ssl-images-amazon.com/images/I/51u8ZRDCVoL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    id: 1,
  },
  {
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    img: "https://images-na.ssl-images-amazon.com/images/I/41JIh4KMHRL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    id: 2,
  },
];
function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return (
          <Book key={book.id} /* spread js6 {...book} */ book={book}></Book>
        );
      })}
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.book.img} alt="" />
      <h1>{props.book.title}</h1>
      <h4>{props.book.author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));

/* style={{ color: '#617d98', fontSize='0.75rem', marginTop='0.25rem' }} */
