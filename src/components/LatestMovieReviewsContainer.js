import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            // + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }

    componentDidMount(){
        //fetch
        fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=CX5CZShdT4Pp7EExk8DGC6H0rZWEcQxL")
            .then(resp => resp.json())
            .then(data => this.setState({reviews: data.results}))
    }

    render(){
        return(
        <div className="latest-movie-reviews">
            <h1>Latest Movie Reviews</h1>
                <ul className="review-list">
                    <MovieReviews reviews={this.state.reviews} />
                </ul>
        </div>)
    }
}