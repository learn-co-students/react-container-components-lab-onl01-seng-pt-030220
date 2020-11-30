// Code MovieReviews Here

import React from 'react'
import Review from './Review'



const MovieReviews = ({ movies }) => (
    <div className="movie-list">
        { movies.map(movie => <Book title={movie.title} img_url={movie.img_url} />)}
    </div>
)



export default MovieReviews
