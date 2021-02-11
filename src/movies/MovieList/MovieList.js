import React from 'react';
import './MovieList.css';
import movie_default from '../../media/images/movie_default.jpg'
import {Link} from 'react-router-dom';

const MovieList = (props) =>{
    if(props.movieList){
        return (
            <div className="All-Movies-list" >
                <p>Back</p>
                {props.movieList.map((movie) => {
                    if((movie.Poster === "N/A" || movie.Poster === null)){
                        movie.Poster = movie_default;
                    }
                    return(
                    <div key={movie.imdbID} className='Movie-card' onClick={()=>props.getAllDetails(movie.imdbID)}>
                    {/* <button><Link to="/movieDetails">See details</Link></button> */}
                    <img src={movie.Poster} className="Card-movie-poster" alt="Movie Poster" />
                    <div className="Card-movie-summary">
                     <p className="Card-movie-title" >{movie.Title}</p>
                     <p className="Card-movie-type" >{movie.Type}</p>
                     <p className="Card-movie-Year" >{movie.Year}</p>
                    </div>
                     
                    </div>
                    )
                    })}
            </div>
        )
    }
    else return <div><h1>Search for Movie</h1></div>

}

export default MovieList;