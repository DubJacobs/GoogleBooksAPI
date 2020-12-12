import React from 'react';
import styles from './BookCard.module.css'

const BookCard = (props) => {
    return (
        <div className={styles.bookcard}>
            <img src={props.image} alt='' />
            <h2>{props.title}</h2>
            <h3>{props.authors}</h3>
            <p>{props.publishedDate}</p>
        </div>
    )
}

export default BookCard;
