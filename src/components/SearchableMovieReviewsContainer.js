import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import MovieReview from './MovieReviews';

const NYT_API_KEY = '[KEY]';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ""
  }

  getData = () => {
    fetch(URL)
    .then(resp => resp.json())
    .then(({data}) => this.setState({reviews: data}))
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.getData()

  }


  render(){
    return(
      <div className="searchable-movie-reviews">
        <form className="searchable-movie-review" onSubmit={this.handleSubmit}>
          <input onChange={(event) => this.setState({searchTerm: event.target.value})} />
          <button>Search</button>
        </form>
        <MovieReview reviews={this.state.reviews}/>
      </div>
    )
  }
}
              