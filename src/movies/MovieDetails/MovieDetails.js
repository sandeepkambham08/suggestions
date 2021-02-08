import React from 'react';

const MovieDetails = (props) =>{

    return(
        <div>
        <p>{props.movieDetails.Title}</p>
        <p>{JSON.stringify(props.movieDetails)}</p>
        </div>
        
    )
}

export default MovieDetails;