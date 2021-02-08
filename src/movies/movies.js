import React, { useState, useEffect } from 'react';
import MovieList from './MovieList/MovieList';
import './movies.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import MovieDetails from './MovieDetails/MovieDetails';

const Movies = () =>{
    
    const [movieName, setMovieName] = useState(); 
    const [movieList, setMovieList] = useState();
    const [movieDetails, setMovieDetails] = useState();

    // Check if the enter is pressed
    const checkEnter = (e) =>{
        console.log(e.which);
        if(e.which === 13){
            getMovieDetails();
        }
    }
    // Keep updating the search field
    const searchMovies = (e) =>{
        console.log(e.target.value);
        setMovieName(e.target.value);
        // axios.get('https://api.themoviedb.org/3/movie/784572?api_key=300914e2a224cd5368e69ad61a5ead04')
        // .then(res =>{ 
        //     console.log(res.data)
        // })
    }

    // Call API to get the search details 
    const getMovieDetails = () =>{
        console.log(movieName);
        axios.get(`https://www.omdbapi.com/?&apikey=f583b536&s=${movieName}`)
        .then(response=>{
            console.log(response.data);
            console.log(response.data.Search);
            setMovieList(response.data.Search);
            document.getElementById("Movies-search-bar").value="";
            setMovieName('');
            
        })
    }
   
    
    // Call API to get complete details 
    const getAllDetails = (id) =>{
        axios.get(`https://www.omdbapi.com/?&apikey=f583b536&i=${id}`)
        .then(response=>{
            console.log(response.data);
            setMovieDetails(response.data)
        })
    }
    const checkDate = (e) =>{
        console.log(e.target.value);
    }

    return(
        <div>
            <p>Movies</p>
            <input className="Movies-search-bar" id="Movies-search-bar" 
            type="text" placeholder="Search movie" 
            onKeyDown={(e)=>{checkEnter(e)}} 
            onChange={(e)=>{searchMovies(e)}} 
            />
            {/* <button onClick={()=>{getMovieDetails()}} >Submit</button>
            <button onClick={()=>{getMovieList()}} >Show list</button> */}
            {!movieDetails && <MovieList
            movieList = {movieList}
            getAllDetails = {getAllDetails}
            />}
           {movieDetails && <MovieDetails
            movieDetails = {movieDetails}
            />} 
            <input type="date" onChange={(e)=>{checkDate(e)}} />
        </div>
    )
}

export default Movies; 


// https://api.themoviedb.org/3/movie/550?api_key=300914e2a224cd5368e69ad61a5ead04