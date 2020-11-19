import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
//             + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=CX5CZShdT4Pp7EExk8DGC6H0rZWEcQxL`)
            .then(resp => resp.json())
            .then(data => {this.setState({reviews: data.results})})
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
        <div className="searchable-movie-reviews">
            <form onSubmit={event => this.handleSubmit(event)}>
                <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange} />
                <button type="submit">Search</button>
            </form>
            <h1>Search Results</h1>
            <ul className="review-list">
                <MovieReviews reviews={this.state.reviews} />
            </ul>
            <hr></hr>
        </div>)
    }
}