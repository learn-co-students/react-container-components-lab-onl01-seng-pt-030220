import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { render } from 'enzyme';

const NYT_API_KEY = 'dWsQz4q810Xs0oOCQV3bYvpE4Xd93BLD';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }


    componentDidMount() {
        fetch(URL)
        .then(res => res.json())
        .then(response => this.setState({ reviews: response.results }))
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <h2>Latest Reviews:</h2>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

}