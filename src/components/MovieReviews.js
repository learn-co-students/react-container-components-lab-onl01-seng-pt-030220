import React from 'react';

const MovieReviews = ({reviews}) => {
    return (
        <ul className="review-list">
            {reviews.map((review) => 
                <li className="review">
                    <h1>{review.headline}</h1>
                    <p>{review.summary_short}</p>
                </li>
            )}
        </ul>
    );
};

export default MovieReviews;