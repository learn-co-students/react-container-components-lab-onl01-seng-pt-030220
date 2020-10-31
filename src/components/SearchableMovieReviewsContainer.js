import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
let URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
           // + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{


   state = {
         searchTerm: "",
         reviews:[]

    }


handleSearch = e => {
   
    e.preventDefault()
       
         URL= URL+`query=${this.state.searchTerm}`+`&api-key=${NYT_API_KEY}`
         fetch(URL)
         .then(res => res.json())
         .then(movies => { 
         this.setState({
             reviews: movies.results
         })
     
     })


}
render(){
   // console.log(`this.state.reviews`,this.state.reviews)
    return (<div className="searchable-movie-reviews">
            <form onSubmit={this.handleSearch}>
                <input type="text" value={this.state.searchTerm} 
                onChange={event=>{this.setState({searchTerm: event.target.value})} }/>
               <button>Click Me</button>
            </form>
             <MovieReviews reviews={this.state.reviews}/> 
           </div>)
}


}
