// Code MovieReviews Here
import React from 'react'

const MovieReviews = props => {
    return (
        <div className="review-list">
            {props.reviews.map(review => {
                return (
                    <div className="review" key={review.byline}>
                        <h3>{review.display_title}</h3>
                        <p>By: {review.byline}</p>
                        <a href={review.link.url} target="_blank"><img src={review.multimedia.src} alt={review.display_title} width={review.multimedia.width} height={review.multimedia.height}/></a>
                        <p>{review.headline}</p>
                        <p>{review.summary_short}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default MovieReviews