import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const NYT_API_KEY = 'kuFG78mLWcoWLc2Ox5Mq5rchbjbclGaq';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component{

    constructor(){
        super() 
        this.state = {
        reviews:[], 
        searchTerm: ""
        }
    }

    getResults = () => {
        fetch(URL + `&query=${this.state.query}`)
        .then(response => response.json())
        .then(data => this.setState({
        reviews: data
        }))
    }

    handleSubmit = (event) =>{
    event.preventDefault()
    this.getResults()
    }

    render(){
        return(
            <div className ="searchable-movie-reviews"> 
            <form onSubmit ={this.handleSubmit}> 
            <input type="text" value={this.state.searchTerm} onChange={event => this.setState({searchTerm: event.target.value})} />
            <button>Search</button>
            </form>
            <MovieReviews movies={this.state.reviews}/> 
            </div>
        )
    }

}