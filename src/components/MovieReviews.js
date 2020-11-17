// Code MovieReviews Here


import React from 'react'


const MovieReviews = (props) => {
  return (
    <ul className='review-list'>
    {props.reviews.map((review) => <li className="review">{review.byline}: {review.summary_short}</li>)}
</ul>
)
}

export default MovieReviews;


