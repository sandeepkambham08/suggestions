import React from "react";
import "./MovieDetails.css";

// MATERIAL UI CARD
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardMedia from "@material-ui/core/CardMedia";
import StarIcon from "@material-ui/icons/Star";
let localStorageIds = localStorage.getItem('myWatchListIds') ? 
JSON.parse(localStorage.getItem('myWatchListIds'))
: [];
// const useStyles = makeStyles({
//   root: {
//     maxWidth: 400,
//   },
// });

const MovieDetails = (props) => {
//   const classes = useStyles();
  let movieDetails = props.movieDetails;
  console.log(localStorageIds.includes(movieDetails.imdbID))
  return (
    <div key={movieDetails.imdbID}>
      {/* <p>{props.movieDetails.Title}</p> */}
      {/* <p>{JSON.stringify(props.movieDetails)}</p> */}
      <br></br>
      <div
        className={["button", "back-button"].join(" ")}
        onClick={() => props.changeToAllMoviesScreen()}
      >
        <span> &lt; Back</span>
      </div>
      <div className="MovieDetails-bigCard">
        <img className="Movie-image" src={movieDetails.Poster} alt="Movie Poster" />
        <div className="Movie-allDetails">
          <p className="Movie-title">{movieDetails.Title} </p>
          <p>{movieDetails.Plot}</p>
          <br></br>
          <p className="Movie-Year">Year : {movieDetails.Year}</p>
          <p>
            imdb: <StarIcon color="secondary"></StarIcon>{" "}
            {movieDetails.imdbRating}
          </p>
          <p>Language : {movieDetails.Language}</p>
          <p>Genre : {movieDetails.Genre}</p>
          {/* <p>Released: {movieDetails.Released}</p> */}
          {/* <p>Runtime: {movieDetails.Runtime}</p> */}
          <br></br>
          <br></br>
          <p>
            <strong>Actors:</strong> {movieDetails.Actors}
          </p>
          <p>Director : {movieDetails.Director}</p>
        </div>
      </div>
      {localStorageIds.includes(movieDetails.imdbID) && <div className={["button", "Add-button"].join(" ")}
      onClick={()=>{props.addToWatchList(movieDetails)}}>
        <span>Add to my watch list</span>{" "}
      </div>}
      {!localStorageIds.includes(movieDetails.imdbID) && <div className={["button", "Suggest-button"].join(" ")}
      onClick={()=>{props.addToWatchList(movieDetails)}}>
        <span>Remove from watchlist</span>{" "}
      </div>}
      
      <div className={["button", "Suggest-button"].join(" ")}>
        <span>Suggest to a friend</span>
      </div>
    </div>
  );
};

export default MovieDetails;
