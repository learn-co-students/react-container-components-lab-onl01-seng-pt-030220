// Code MovieReviews Here
import React, {Component}  from 'react'


const MovieReviews =({reviews})=>(
  
    <div className="review-list">
             {reviews.map(movieReviews =>{
                  
                return (<div className="review">
                        <p>{movieReviews.headline}</p>
                       </div> )
            })}
            
    </div> 
  
)
     


export default MovieReviews


//which lists a series of movie reviews on the page.