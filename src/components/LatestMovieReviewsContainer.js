import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

//https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ
const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: []
        }
    }
    
    componentDidMount() {
        this.fetchReviews()
    }
    
    fetchReviews = () => {
        fetch(URL)
        .then(res => res.json())
        .then((data) => {
            this.setState({
                reviews: data.results
            })
        })
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        );
    }
}
//The LatestMovieReviewsContainer should have a top-level wrapping element with class latest-movie-reviews.
export default LatestMovieReviewsContainer;