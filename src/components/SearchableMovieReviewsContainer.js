import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: '',
    reviews: []
  }

  fetchData = () => {
    fetch(URL + `&query=${this.state.searchTerm}`)
      .then(response => response.json())
      .then(data => this.setState({ reviews: data.results }));
    
  }

  handleSubmit = event => {
    event.preventDefault()
    this.fetchData()
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.searchTerm} onChange={event => this.setState({searchTerm: event.target.value})} />
          <button>Submit</button>
        </form>

          <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
