// Code MovieReviews Here
import React from 'react'


const MovieReviews = props => {
    // console.log(props.reviews)
    return (
    <div className="review-list">
        {props.reviews.map((review, i)=> {
            return (
                <ul className="review" key={i}>
                    <li>{review.summary_short}</li>
                </ul>
            )
        })}
    </div>
    )
}
export default MovieReviews