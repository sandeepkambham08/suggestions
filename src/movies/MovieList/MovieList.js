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
                    <img src={movie.Poster} alt="Movie Poster" />
                     <p>{movie.Title}</p>
                     <p>{movie.Type}</p>
                     <p>{movie.Year}</p>
                    </div>
                    )
                    })}
            </div>
        )
    }
    else return <div><h1>initial</h1></div>

}

export default MovieList;