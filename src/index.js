
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';



const BookList = () => {

  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>

  );

}

const Book = () => {

  return (
    <article className='book'>
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>

  );
}


const Image = () => (
  <img src='https://images-na.ssl-images-amazon.com/images/I/714vGrppcgL._AC_UL600_SR600,400_.jpg'
  alt='book'></img>
);
const Title = () => {
  return <h2>Good Energy</h2>;
};
const Author = () => <h4>by Casey Means MD (Author), Calley Means</h4>;


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);

