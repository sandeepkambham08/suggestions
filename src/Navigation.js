import React from 'react';
import {Route } from 'react-router-dom';
import Movies from './movies/movies';
import LandingPage from './LandingPage/LandingPage';

const Navigation =()=>{
    return(
        <div>
            <ul style={{margin:"0", padding:"0"}} >
                <Route path="/" exact render = {()=><LandingPage/>}   />
                <Route path="/movies" render = {()=><Movies/>}   />
                <Route path="/places"  render ={()=> <h1>Places</h1>}   />
                <Route path="/restaurants"  render ={()=> <h1>Restaurants</h1>}   />
                <Route path="/others"  render ={()=> <h1>Other suggestions</h1>}   />
            </ul>
        </div>
    )
}

export default Navigation;