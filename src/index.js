import React from 'react';
import ReactDOM from 'react-dom';

function BookList(){
  return (<section>
    <Book />
    <Book />
    <Book />
  </section>);
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/51u8ZRDCVoL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" alt="" />
const Title = () => <h1>Rich Dad, Poor Dad</h1>
const Author = () => <h4>Robert T. Kiyosak</h4>

ReactDOM.render(<BookList />, document.getElementById('root'));

