import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dWsQz4q810Xs0oOCQV3bYvpE4Xd93BLD';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMOvieReviewsContainer extends Component {

    state = {
        searchTerm: '',
        reviews: []
    };

    handleSearch = event => this.setState({ searchTerm: event.target.value })
    handleSubmit = event => {
        event.preventDefault();

        fetch(BASE_URL.concat(this.state.searchTerm))
        .then(res => res.json())
        .then(res => this.setState({ reviews: res.results }))
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label id="search input" type="text" style={{ width: 300 }} onChange={this.handleSearch}/>
                    <button type="submit">Submit</button>
                </form>
                {typeof this.state.reviews === 'object' && this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}