import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer'
const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
let URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LastestMovieReviewsContainer extends Component{

  constructor(){

      super()
      this.state={

         reviews: []
      }
  }



  render(){
      return (
        <div className="latest-movie-reviews"> 
        <MovieReviews reviews={this.state.reviews}/> 
        </div>
   
      )
  }


fetchMovieReview(){

     fetch(URL)
     .then(res => res.json())
     .then(movies => { 
         this.setState({
             reviews: movies.results
           
         })
     
     })
}
  componentDidMount(){
     this.fetchMovieReview()
  }


}
//will fetch a list of the most recent reviews and display them