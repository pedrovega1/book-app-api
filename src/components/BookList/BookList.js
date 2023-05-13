import React from 'react'
import { useGlobalContext } from '../context'
import Book from './Book';
import Loader from '../Loader/Loader';

const BookList = () => {
  const {books, loading, resultTitle} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : 'https://via.placeholder.com/150?text=No+Cover+Available'
    }
  });

  if(loading) return <Loader />;

  return (
    <section className='booklist'>
      <div className='container bg-gray-400'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid grid-cols-6 '>
          {
            booksWithCovers.slice(0, 30).map((item, index) => {
              return (
                <Book key={index} {...item} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default BookList;
