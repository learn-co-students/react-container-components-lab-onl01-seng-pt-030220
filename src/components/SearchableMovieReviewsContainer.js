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

    handleSubmit = e => {
        e.preventDefault()
        this.fetchData()
    }

    fetchData = () => {
        fetch(URL + `&searchTerm=${this.state.searchTerm}`)
            .then(res => res.json())
            .then(response => this.setState({ reviews: response.results }))
    }

    handleChange = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }


}