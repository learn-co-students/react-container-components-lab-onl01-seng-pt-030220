import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import MovieReview from './MovieReviews';
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer';

const NYT_API_KEY = '[KEY]';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {

  state = {
    reviews: []
  }

  getData = () => {
    fetch(URL)
    .then(resp => resp.json())
    .then(({data}) => this.setState({reviews: data}))
  }

  componentDidMount(){
    this.getData()
  }

  render(){
    return(
      <div className="latest-movie-reviews" >
        <MovieReview reviews={this.state.reviews}/>
      </div>
    )
  }
}
            