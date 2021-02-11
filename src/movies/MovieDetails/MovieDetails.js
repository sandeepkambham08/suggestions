import React from 'react';

const MovieDetails = (props) =>{

    return(
        <div>
        <p>{props.movieDetails.Title}</p>
        <button onClick={()=>props.changeToAllMoviesScreen()} >Back</button>
        <p>{JSON.stringify(props.movieDetails)}</p>
        </div>
        
    )
}

export default MovieDetails;