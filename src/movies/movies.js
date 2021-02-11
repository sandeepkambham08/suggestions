import React, { useState, useEffect } from 'react';
import MovieList from './MovieList/MovieList';
import './movies.css';
import axios from 'axios';
// import {Link} from 'react-router-dom';
import MovieDetails from './MovieDetails/MovieDetails';
import PageSelection from '../PageSelection/PageSelection';

const Movies = () =>{
    
    const [movieName, setMovieName] = useState(); 
    const [movieList, setMovieList] = useState();
    const [movieDetails, setMovieDetails] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState();
    const [totalPages , setTotalPages] = useState();

    // Check if the enter is pressed
    const checkEnter = (e) =>{
        setCurrentPage(1);
        // console.log(e.which);
        if(e.which === 13){
            getMovieDetails();
        }
    }

    

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
    const getMovieDetails = () =>{
        const movieNameNew = document.getElementById("Movies-search-bar").value;
        console.log(movieNameNew);
        setMovieName(movieNameNew);
        axios.get(`https://www.omdbapi.com/?&apikey=f583b536&s=${movieNameNew}&page=${currentPage}`)
        .then(response=>{
            console.log(response.data);
            console.log(response.data.Search);
            setMovieList(response.data.Search);
            setTotalResults(response.data.totalResults);
            setTotalPages(Math.ceil(response.data.totalResults/10));
            // console.log(Math.ceil(response.data.totalResults/10))
            // document.getElementById("Movies-search-bar").value="";
            console.log(movieName)
            
        })
    }

    useEffect(()=>{
        getMovieDetails();
        console.log(Math.ceil(totalResults/10))
    },[currentPage])


   
    
    // Call API to get complete details 
    const getAllDetails = (id) =>{
        axios.get(`https://www.omdbapi.com/?&apikey=f583b536&i=${id}`)
        .then(response=>{
            console.log(response.data);
            setMovieDetails(response.data);
            setShowMovieScreen(true)
        })
    }

    // Debouncing algo - to limit the number of API calls 
    const deBouncing = (fn, delay) =>{
        let timer;
        return function (){
        clearTimeout(timer);
           timer = setTimeout(()=>{
                fn();
            },delay)
        }
    }

    // Calling a better search using debouncing 
    const betterSearch = deBouncing(getMovieDetails, 600)

    const changePage = (val) =>{
        if(val==="first"){
            setCurrentPage(1)
        }
        else if(val==="last"){
            setCurrentPage(totalPages);
        }
        else{setCurrentPage(currentPage + val)}
        
    }
    return(
        <div>
            <p>Movies</p>
            <input className="Movies-search-bar" id="Movies-search-bar" 
            type="text" placeholder="Search movie" 
            onKeyDown={(e)=>{checkEnter(e)}} 
            onChange = {(e)=>{betterSearch(e)}}
            />
            <PageSelection
            totalPages  =  {totalPages}
            currentPage =  {currentPage}
            changePage = {changePage}
            />
            {/* <button onClick={()=>{setCurrentPage(currentPage - 1 )}} >Prev</button>
            <button onClick={()=>{setCurrentPage(currentPage + 1 )}}>Next</button> */}
            {!movieDetails && <MovieList
            movieList = {movieList}
            getAllDetails = {getAllDetails}
            />}
           {movieDetails && <MovieDetails
            movieDetails = {movieDetails}
            />} 
            
</div>
    )
}

export default Movies; 


// https://api.themoviedb.org/3/movie/550?api_key=300914e2a224cd5368e69ad61a5ead04