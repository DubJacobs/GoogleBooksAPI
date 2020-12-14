import React from 'react';
import styles from './BookCard.module.css'

const BookCard = (props) => {
    return (
        <div className={styles.bookcard}>
            <img src={props.image} alt='' />
            <h2>{props.title}</h2>
            <h3>Author: {props.authors}</h3>
            <p>Pubished Data: {props.published}</p>
            <input type='checkbox'></input>
            <label>Save to Cart</label>
            <br></br>
            <button>Submit</button>
        </div>
    )
}

export default BookCard;
