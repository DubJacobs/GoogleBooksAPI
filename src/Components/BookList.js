import React from 'react';
import BookCard from './BookCard';
import styles from './BookList.module.css'

const BookList = (props) => {
    return (
        <div className={styles.booklist}>
            {
                props.books.map((book, i) => {
                    return <BookCard
                        key={i}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors}
                        publishedDate={book.volumeInfo.publishedDate}
                    />
                })
            }
        </div>
    )
}

export default BookList;
