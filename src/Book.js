import React from "react";

const Book = (props) => {
  const clickHandler = (author) => {
    alert(author);
  };
  const hoverEvent = (e) => {
    console.log(e);
  };

  return (
    <article className="book" onMouseOver={() => hoverEvent(props.book.title)}>
      <img src={props.book.img} alt="" />
      <h1>{props.book.title}</h1>
      <h4>{props.book.author}</h4>
      <button onClick={() => clickHandler(props.book.author)} type="button">
        Hello
      </button>
    </article>
  );
};

export default Book;
