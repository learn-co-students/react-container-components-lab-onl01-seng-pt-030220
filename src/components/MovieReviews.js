// Code MovieReviews Here
import React from 'react'


const MovieReviews = props => {
    // console.log(props.reviews)
    return (
    <ul className='review-list'>
        {props.reviews.map((review, i) => <li className='review' key={i}>{review.summary_short}</li>)}
    </ul>
    )
}
export default MovieReviews