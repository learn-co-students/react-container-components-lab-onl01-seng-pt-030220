import { expect } from 'chai'
import React, { Component } from 'react'

const MovieReview = (props) => {

  return(
    <ul className="review-list">
      {props.reviews.map((review, i ) => <li className="review" key={i}>{review.summary_short}</li>)}
    </ul>
  )

}

export default MovieReview
