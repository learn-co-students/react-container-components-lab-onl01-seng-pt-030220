// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) => { return( 
    <div className="review-list">
        <ul>
            {reviews.map(review => 
              <div className="review" >
                  <li>
                    <h2>{review.headline}</h2>
                    <p>{review.summary_short}</p>
                    </li>
                    </div>
                )}
       </ul>
    </div>

)}
export default MovieReviews