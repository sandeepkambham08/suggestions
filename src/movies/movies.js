import React, { useState, useEffect } from "react";
import MovieList from "./MovieList/MovieList";
import "./movies.css";
import axios from "axios";
// import {Link} from 'react-router-dom';
import MovieDetails from "./MovieDetails/MovieDetails";
// import WatchList from './WatchList/WatchList'
// import PageSelection from "../PageSelection/PageSelection";

// PAGINATION MATERIAL UI
import Pagination from "@material-ui/lab/Pagination";
import WatchList from "./WatchList/WatchList";

// import LandingPage from './LandingPage/LandingPage';

// // FIREBASE // 
// import firebase from "firebase/app";

// import "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDvsyfyDoaQAVGlFmcywg0ZWe7F1mGNuqM",
//   authDomain: "my-watchlist-59904.firebaseapp.com",
//   projectId: "my-watchlist-59904",
//   storageBucket: "my-watchlist-59904.appspot.com",
//   messagingSenderId: "1002946129845",
//   appId: "1:1002946129845:web:62c119bb9e73a7953f33fc",
//   measurementId: "G-ZV0SDRZH29",
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.auth();
// // firebase.database();
// // FIREBASE // 


let localStorageBuffer = localStorage.getItem("myWatchList")
  ? JSON.parse(localStorage.getItem("myWatchList"))
  : [];
let localStorageIds = localStorage.getItem("myWatchListIds")
  ? JSON.parse(localStorage.getItem("myWatchListIds"))
  : [];

const Movies = () => {
  const [movieName, setMovieName] = useState();
  const [movieList, setMovieList] = useState();
  const [movieDetails, setMovieDetails] = useState();
  const [showDetailsScreen, setShowDetailsScreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState();
  const [totalPages, setTotalPages] = useState();
  const [errorMessage, setErrorMessage] = useState();
//   const [myWatchList, setMyWatchList] = useState([]);
//   const [recentlyAddedWatchList, setRecentlyAddedWatchList] = useState([]);

  // Check if the enter is pressed
  const checkEnter = (e) => {
    setCurrentPage(1);
    // console.log(e.which);
    if (e.which === 13) {
      getMovieDetails();
    }
  };

  // Keep updating the search field
  // const searchMovies = (e) =>{
  //     console.log(e.target.value);
  //     setMovieName(e.target.value);
  //     // axios.get('https://api.themoviedb.org/3/movie/784572?api_key=300914e2a224cd5368e69ad61a5ead04')
  //     // .then(res =>{
  //     //     console.log(res.data)
  //     // })
  // }

  // Call API to get the search details
  const getMovieDetails = () => {
    const movieNameNew = document.getElementById("Movies-search-bar").value;
    console.log(movieNameNew);
    setMovieName(movieNameNew);
    if(movieNameNew  === ""){
      setErrorMessage("");
    }
    axios
      .get(
        `https://www.omdbapi.com/?&apikey=f583b536&s=${movieNameNew}&page=${currentPage}&plot=short`
      )
      .then((response) => {
        console.log(response.data);
        // console.log(response.data.Search);
        setMovieList(response.data.Search);
        setTotalResults(response.data.totalResults);
        setTotalPages(Math.ceil(response.data.totalResults / 10));
        if(movieNameNew  === ""){
          setErrorMessage("");
        }
        else setErrorMessage(response.data.Error);
        // console.log(Math.ceil(response.data.totalResults/10))
        // document.getElementById("Movies-search-bar").value="";
        // console.log(movieName);
      });
  };

  // Trigger function to call next page results after a page number click
  useEffect(() => {
    getMovieDetails();
    console.log(Math.ceil(totalResults / 10));
  }, [currentPage]);

  // Call API to get complete details
  const getAllDetails = (id) => {
    axios
      .get(`https://www.omdbapi.com/?&apikey=f583b536&i=${id}`)
      .then((response) => {
        console.log(response.data);
        setMovieDetails(response.data);
        setShowDetailsScreen(true);
      });
  };

  // Debouncing algo - to limit the number of API calls
  const deBouncing = (fn, delay) => {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn();
      }, delay);
    };
  };

  // Calling a better search using debouncing
  const betterSearch = deBouncing(getMovieDetails, 600);

  const changePage = (e, val) => {
    console.log(val);
    if (val === "first") {
      setCurrentPage(1);
    } else if (val === "last") {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(val);
    }
  };

  // Change to movies list screen
  const changeToAllMoviesScreen = () => {
    setShowDetailsScreen(false);
  };

  // Add to watch list
  const addToWatchList = (movieDetails) => {
    // console.log(movieDetails)
    localStorageBuffer.push(movieDetails);
    localStorageIds.push(movieDetails.imdbID);
    console.log(localStorageBuffer);
    // setMyWatchList([...myWatchList, movieDetails]);
    // setRecentlyAddedWatchList([...recentlyAddedWatchList, movieDetails]);
    localStorage.setItem("myWatchList", JSON.stringify(localStorageBuffer));
    localStorage.setItem("myWatchListIds", JSON.stringify(localStorageIds));
    // console.log(myWatchList)
  };

  return (
    <div>
      {!showDetailsScreen && (
        <div>
          {/* <p>Movies</p> */}

          <input
            className="Movies-search-bar"
            id="Movies-search-bar"
            type="text"
            placeholder="Search movie"
            onKeyDown={(e) => {
              checkEnter(e);
            }}
            onChange={(e) => {
              betterSearch(e);
            }}
          />
          <p className="Error-msg">{errorMessage}</p>
          <div className="Center">
            {movieList && (
              <Pagination
                count={totalPages}
                color="secondary"
                page={currentPage}
                boundaryCount={2}
                onChange={changePage}
              />
            )}
          </div>
          {/* <button onClick={()=>{setCurrentPage(currentPage - 1 )}} >Prev</button>
            <button onClick={()=>{setCurrentPage(currentPage + 1 )}}>Next</button> */}
          <MovieList movieList={movieList} getAllDetails={getAllDetails} />
          <WatchList />
        </div>
      )}
      {showDetailsScreen && (
        <MovieDetails
          movieDetails={movieDetails}
          changeToAllMoviesScreen={changeToAllMoviesScreen}
          addToWatchList={addToWatchList}
        />
      )}
    </div>
  );
};

export default Movies;

// https://api.themoviedb.org/3/movie/550?api_key=300914e2a224cd5368e69ad61a5ead04
