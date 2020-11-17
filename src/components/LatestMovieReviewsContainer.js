import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'kuFG78mLWcoWLc2Ox5Mq5rchbjbclGaq';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component{

    constructor(){
        super() 
        this.state = {
        reviews:[] 
        }
    }

    componentDidMount(){
        fetch(URL)
        .then(response => response.json())
        .then(data => this.setState({reviews: data}))
    }

    render(){
        return(
            <div className="latest-movie-reviews"> 
            <MovieReviews movies={this.state.reviews}/> 
            </div>
        )
    }

}
