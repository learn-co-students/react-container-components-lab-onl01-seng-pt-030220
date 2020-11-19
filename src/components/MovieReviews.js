// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
   
    const reviews = props.reviews.map((review, key) => {
        return(
            <li className="review" key={review.link.url}>
                <h2>{review.display_title}</h2> 
                <p>{review.headline}</p>
                <a href={review.link.url}>{review.link.suggested_link_text}</a>
            </li>
        )
    }) 
   
    return(
        <ul className="review-list">
            {reviews}
        </ul>
    )
}

export default MovieReviews;