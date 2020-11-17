// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
return <ul className ="review-list"> 
{props.movies.map((review, i) => <li className='review'> {review.summary_short}</li>)}
</ul>
} 

export default MovieReviews;
