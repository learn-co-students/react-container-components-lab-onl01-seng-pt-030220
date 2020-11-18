import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }
        
    handleTyping = (event) => {
        this.setState({ searchTerm: event.target.value })
    }

    search = (event) => {
        event.preventDefault()

        this.fetchReviews()
    }

    fetchReviews = () => {
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(res => res.json())
        .then((data) => {
            this.setState({
                reviews: data.results
            })
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.search}>
                    <input type="text" onChange={this.handleTyping}></input>
                    <input type="submit" value="Search"></input>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        );
    }
}
// The SearchableMovieReviewsContainer should have a top-level wrapping element with class searchable-movie-reviews
export default SearchableMovieReviewsContainer;