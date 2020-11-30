import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'nogwQe1VjV2ZRYO6QWAwXA7ESrssGoUN';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            reviews: []
        };
    }

    componentDidMount() {
        fetch(URL)
            .then(response => response.json())
            .then(movieData => this.setState({ movies: movieData.movies }))
    }

    render() {
        return <MovieReviews movies={this.state.movies} />
    }
}



export default LatestMovieReviewsContainer
